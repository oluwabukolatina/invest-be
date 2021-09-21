import { NextFunction, Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import HttpException from '../utils/http-exception';
import { MESSAGE_UNAUTHORIZED } from '../module/user/auth/message/auth.message';
import { INVEST_ON_DABA_JWT_SECRET } from '../config/secrets';

async function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');
  if (!token)
    return next(
      new HttpException(StatusCodes.UNAUTHORIZED, MESSAGE_UNAUTHORIZED),
    );

  try {
    req.user = jwt.verify(token, INVEST_ON_DABA_JWT_SECRET);
    return next();
  } catch (e) {
    return next(
      new HttpException(StatusCodes.BAD_REQUEST, 'Token Is Not Valid'),
    );
  }
}
export default auth;
