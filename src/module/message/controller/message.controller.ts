import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import HttpException from '../../../utils/http-exception';
import ResponseHandler from '../../../utils/response-handler';
import MessageService from '../service/message.service';
import { MESSAGE_MESSAGES_FETCHED } from '../message.message';

class MessageController {
  public createMessage = async (
    { body, user }: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const message = await MessageService.create({
        message: body.message,
        user: user.id,
      });
      if (!message) {
        return next(new HttpException(StatusCodes.BAD_REQUEST, 'Not created'));
      }
      return ResponseHandler.CreatedResponse(res, 'Message Created', message);
    } catch (error) {
      return next(error);
    }
  };

  public getMessages = async (
    request: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const messages = await MessageService.findAll();
      return ResponseHandler.CreatedResponse(res, MESSAGE_MESSAGES_FETCHED, {
        messages,
      });
    } catch (error) {
      return next(error);
    }
  };
}
export default MessageController;
