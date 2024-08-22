import {Request, Response} from "express"
import { CreateUserInput, ForgotPasswordInput, ResetPasswordInput, VerifyUserInput } from "../schema/user.schema"
import { createUser, findUserById, findUserByEmail } from "../service/user.service";
import sendEmail from "../utils/mailer";
import log from "../utils/logger";


export async function createUserHandler(req: Request<{}, {}, CreateUserInput>,res: Response){
    const body = req.body;

    try{
        const user = await createUser(body);

        await sendEmail({
            from: 'test@example.com',
            to: user.email,
            subject: "Please verify your account",
            text: `verification code ${user.verificationCode}. Id: ${user._id}`
        });

        return res.send("User successfully created");
    }catch(e:any){
        if (e.code === 11000) {
          return res.status(409).send("Account already exists");
        }
        return res.status(500).send(e);
    }
}

export async function verifyUserHandler(req: Request<VerifyUserInput>, res: Response){
    const id = req.params.id
    const verificationCode = req.params.verificationCode

    //Next we need to find the user by the id
    const user = await findUserById(id)

    //Then check to see of they are already verified
    if(!user){
        return res.send("Could not verify user")
    }
    if(user.verified){
        return res.send("user is already verified")
    }

     //Check to see of the verificationCode matches
    if(user.verificationCode === verificationCode){
        user.verified = true

        await user.save()

        return res.send("User successfully verified")
    }

    return res.send("Could not verify user")
}

export async function forgotPasswordHandler(req: Request<{}, {}, ForgotPasswordInput>, res: Response ){

    const message= "If a user with that email is registered you will recevive a password reset email";
    const { email} = req.body;

    const user = await findUserByEmail(email)
    if(!user){
        log.debug(`User with email ${email} does not exists`);
        return res.send(message);
    }
    if(!user.verified){
        return res.send("User is not verified");
    }

    const { nanoid } = await import('nanoid');
    const passwordResetCode = nanoid();

    user.passwordResetCode = passwordResetCode
    await user.save() 

    await sendEmail({
        to: user.email,
        from: "test@example.com",
        subject: "Reset your password",
        text: `Password reset code: ${passwordResetCode}. Id ${user._id}`,
    })

    log.debug(`Password reset email sent to ${email}`);
    return res.send(message);
}

export async function resetPasswordHandler(req: Request<ResetPasswordInput["params"], {}, ResetPasswordInput["body"]>,
    res: Response) {

    const {id, passwordResetCode} = req.params

    const { password } = req.body;

    const user = await findUserById(id);

    //Checking to see three things here:
    //1.) Check to see if the user is actually registered
    //2.) Make sure the user has a reset password code
    //3.) Password reset code given doesn't match what the user gave
    if(!user || !user.passwordResetCode || user.passwordResetCode !== passwordResetCode ){
        return res.status(400).send("Could not reset user password");
    }

    //setting this to null so that they can't reuse the same password reset code again for future attemps
    user.passwordResetCode = null;
    
    user.password = password;

    await user.save();

    return res.send("Successfully updated password");
}

export async function getCurrentUserHandler(req: Request, res: Response) {
    return res.send(res.locals.user);
  }