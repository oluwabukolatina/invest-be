import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import HttpException from '../../../../utils/http-exception';
import UserService from '../../service/user.service';
import AuthHelper from '../helper/auth-helper';
import { MESSAGE_INVALID_CREDENTIALS } from '../../message/user.message';

const AuthMiddleware = {
  async checkIfUserPasswordIsCorrect(
    { body }: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { email, password } = body;
    try {
      const existingUser = await UserService.findUser({ email });
      /**
       * check password matches
       */
      const compare = await AuthHelper.comparePassword(
        password,
        existingUser.password,
      );
      if (compare) return next();

      return next(
        new HttpException(StatusCodes.BAD_REQUEST, MESSAGE_INVALID_CREDENTIALS),
      );
    } catch (e) {
      return next(e);
    }
  },
};
export default AuthMiddleware;
