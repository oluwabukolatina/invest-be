import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import ResponseHandler from '../utils/response-handler';

function welcomeMessage(request: Request, response: Response) {
  ResponseHandler.SuccessResponse(response, StatusCodes.OK, 'Hello!');
}

export default welcomeMessage;
