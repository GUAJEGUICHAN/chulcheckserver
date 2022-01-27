import { AuthController } from './../contoroller/auth';
import express from 'express';

import { body } from 'express-validator';

import { validate } from '../middleware/validator';

const router = express.Router();

const validateCredential = [
  body('username')
    .trim()
    .notEmpty()
    .isLength({ min: 4 })
    .withMessage('username should be at least 4 characters'),
  body('password')
    .trim()
    .isLength({ min: 4 })
    .withMessage('password should be at least 4 characters'),
  validate,
];

// router.post('/login', authController.login);

export default function authRouter(authController: AuthController): any {
  router.post('/login', validateCredential, authController.login);
}


// export default router;
