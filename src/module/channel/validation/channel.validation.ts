import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import AppValidation from '../../../middleware/app.validation';

const ChannelValidation = {
  async validateCreateChannel(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    const schema = Joi.object({
      name: Joi.string().min(3).label('Name of Channel').required(),
      description: Joi.string().min(8).label('Description').required(),
    });
    await AppValidation.bodyBaseValidator(schema, request, response, next);
  },
};
export default ChannelValidation;
