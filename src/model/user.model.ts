import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

@modelOptions({
    schemaOptions:{
        timestamps: true
    }
})


export class User{
    @prop({lowercase:true, required: true,  unique: true})
    email: string;

    @prop({required: true})
    firstName: string;

    @prop({required: true})
    lastName: string;

    @prop({required: true})
    password: string;

    @prop({required: true, default: () => nanoid() })
    verificationCode: string;

    @prop({})
    passwordResetCode: string;

    @prop({default: false})
    verified: boolean;
}

const UserModel = getModelForClass(User)

export default UserModel