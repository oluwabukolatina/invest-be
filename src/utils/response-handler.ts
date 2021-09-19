/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class ResponseHandler {
  static ErrorResponse(
    res: Response,
    code: number,
    message: string,
    data: any,
  ) {
    return res.status(code).json({ message, status: false, data });
  }

  static JoiErrorResponse(
    res: Response,
    code: number,
    data: any,
    message: string,
  ) {
    return res.status(code).json({ status: false, message, data });
  }

  static SuccessResponse(
    res: Response,
    code: number,
    message = '',
    data?: any,
  ) {
    return res.status(code).json({ message, status: true, data });
  }

  static CreatedResponse(res: Response, message = '', data: any) {
    return res
      .status(StatusCodes.CREATED)
      .json({ message, status: true, data });
  }

  static ServerErrorResponse(
    res: Response,
    code?: any,
    message?: string,
    data?: any,
  ) {
    return res.status(code).json({ message, status: false, data });
  }

  static BadRequestResponse(res: Response, message: string, data?: any) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message, status: false, data });
  }

  static NotFoundResponse(res: Response, message: string, data: any) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message, status: false, data });
  }
}

export default ResponseHandler;
