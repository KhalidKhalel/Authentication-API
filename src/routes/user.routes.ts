import express from 'express'
import validateResource from '../middleware/validateResource';
import { createUserSchema, verifyUserSchema, forgotPasswordSchema, resetPasswordSchema} from '../schema/user.schema';
import { createUserHandler, resetPasswordHandler } from '../controller/user.controller';
import { forgotPasswordHandler } from '../controller/user.controller';
import { getCurrentUserHandler } from '../controller/user.controller';

const router = express.Router()

router.post(
    "/api/users",validateResource(createUserSchema),createUserHandler
  );

router.post("/api/users/verify/:verificationCode", validateResource(verifyUserSchema))

router.post(
  "/api/users/forgotpassword",
  validateResource(forgotPasswordSchema),
  forgotPasswordHandler
);

router.post("/api/users/resetpassword/:id/passwordResetCode", validateResource(resetPasswordSchema),
resetPasswordHandler
);

router.get("/api/users/me", getCurrentUserHandler);

export default router