import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import HttpException from '../utils/http-exception';

const AppValidation = {
  async bodyBaseValidator(
    schema: any,
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      req.body = await schema.validateAsync(req.body);
      return next();
    } catch (error) {
      return next(
        new HttpException(
          StatusCodes.BAD_REQUEST,
          error.message.replace(/["]/gi, ''),
        ),
      );
    }
  },
};
export default AppValidation;
