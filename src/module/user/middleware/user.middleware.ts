import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../service/user.service';
import HttpException from '../../../utils/http-exception';
import { MESSAGE_USER_DOES_NOT_EXIST } from '../message/user.message';

const UserMiddleware = {
  async checkIfUserExists(request: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.findUser({
        email: request.body.email,
      });

      if (!user) {
        return next(
          new HttpException(StatusCodes.NOT_FOUND, MESSAGE_USER_DOES_NOT_EXIST),
        );
      }
      return next();
    } catch (e) {
      return next(e);
    }
  },
  /**
   * to sign the user
   * @param body
   * @param res
   * @param next
   */
  async checkIfARegisteredUser(
    { body }: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { email } = body;
    try {
      const user = await UserService.findUser({ email });

      if (user) {
        return next(
          new HttpException(
            StatusCodes.BAD_REQUEST,
            'This email is already connected to an account',
          ),
        );
      }
      return next();
    } catch (e) {
      return next(e);
    }
  },
  /**
   * basically checks if the user in the req.user exists
   * @param request
   * @param res
   * @param next
   */
  async checkIfAValidUser(request: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.findUser({ _id: request.user.id });

      if (user) {
        return next();
      }
      return next(
        new HttpException(StatusCodes.BAD_REQUEST, MESSAGE_USER_DOES_NOT_EXIST),
      );
    } catch (e) {
      return next(e);
    }
  },
};
export default UserMiddleware;
