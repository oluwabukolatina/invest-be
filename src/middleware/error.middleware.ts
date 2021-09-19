import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ResponseHandler from '../utils/response-handler';
import HttpException from '../utils/http-exception';
// import logger from '../config/logger';

function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const status = error.status || 500;
  const message = error.message.toString() || 'Something went wrong';
  // logger.error(`status - ${status}, message - ${message},url - ${request.originalUrl},method - ${request.method},IP - ${request.ip}
  //  `);

  if (status === StatusCodes.BAD_REQUEST) {
    return ResponseHandler.BadRequestResponse(response, message);
  }
  return ResponseHandler.ServerErrorResponse(response, status, message);
}

export default errorMiddleware;
