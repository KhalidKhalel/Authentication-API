import express from 'express'
import validateResource from '../middleware/validateResource';
import { createUserSchema, verifyUserSchema, forgotPasswordSchema} from '../schema/user.schema';
import { createUserHandler } from '../controller/user.controller';
import { forgotPasswordHandler } from '../controller/user.controller';

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

export default router