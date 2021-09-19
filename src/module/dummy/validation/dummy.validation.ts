import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import AppValidation from '../../../middleware/app.validation';

const DummyValidation = {
  async validateCreateDummy(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    const schema = Joi.object({
      name: Joi.string().min(8).label('Dummy').required(),
    });
    await AppValidation.bodyBaseValidator(schema, request, response, next);
  },
};
export default DummyValidation;
