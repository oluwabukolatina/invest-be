import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import AppValidation from '../../../../middleware/app.validation';

const AuthValidation = {
  async validateReset(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    const schema = Joi.object({
      password: Joi.string()
        .label('Password')
        .regex(/^(?=.*[@$!%*?.&])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
        .message(
          'Password should contain at least 8 characters; 1 symbol, 1 number and 1 uppercase letter.',
        )
        .min(8)
        .required(),
      confirm: Joi.string()
        .label('Confirm Password')
        .regex(/^(?=.*[@$!%*?.&])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
        .message(
          'Confirmation Password should contain at least 8 characters; 1 symbol, 1 number and 1 uppercase letter.',
        )
        .min(8)
        .required(),
      token: Joi.string().label('Reset Token').required(),
    });
    await AppValidation.bodyBaseValidator(schema, request, response, next);
  },
  async validateRegister(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    const schema = Joi.object({
      email: Joi.string().email().label('Email').required(),
      password: Joi.string()
        .label('Password')
        .regex(/^(?=.*[@$!%*?.&])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
        .message(
          'Password should contain at least 8 characters; 1 symbol, 1 number and 1 uppercase letter.',
        )
        .min(8)
        .required(),
    });
    await AppValidation.bodyBaseValidator(schema, request, response, next);
  },
  async validateLogin(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    const schema = Joi.object({
      email: Joi.string().email().label('Email').required(),
      password: Joi.string().label('Password').required(),
    });
    await AppValidation.bodyBaseValidator(schema, request, response, next);
  },

  async validateChangePassword(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const schema = Joi.object({
      currentPassword: Joi.string().label('Current Password').required(),
      newPassword: Joi.string()
        .label('New Password')
        .regex(/^(?=.*[@$!%*?.&])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
        .message(
          'Password should contain at least 8 characters; 1 symbol, 1 number and 1 uppercase letter.',
        )
        .min(8)
        .required(),
      confirmNewPassword: Joi.string()
        .label('Confirm Password')
        .regex(/^(?=.*[@$!%*?.&])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
        .message(
          'Confirmation Password should contain at least 8 characters; 1 symbol, 1 number and 1 uppercase letter.',
        )
        .min(8)
        .required(),
    });
    await AppValidation.bodyBaseValidator(schema, req, res, next);
  },
};
export default AuthValidation;
