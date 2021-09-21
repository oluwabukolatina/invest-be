import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import AppValidation from '../../../middleware/app.validation';

const MessageValidation = {
  async validateCreateMessage(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    const schema = Joi.object({
      message: Joi.string().min(2).label('Message').required(),
    });
    await AppValidation.bodyBaseValidator(schema, request, response, next);
  },
};
export default MessageValidation;
