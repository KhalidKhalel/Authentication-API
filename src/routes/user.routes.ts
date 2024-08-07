import express from 'express'
import validateResource from '../middleware/validateResource';
import { createUserSchema, verifyUserSchema } from '../schema/user.schema';
import { createUserHandler } from '../controller/user.controller';

const router = express.Router()

router.post(
    "/api/users",validateResource(createUserSchema),createUserHandler
  );

router.post("/api/users/verify/:verificationCode", validateResource(verifyUserSchema))

export default router