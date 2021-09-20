import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import HttpException from '../../../utils/http-exception';
import ResponseHandler from '../../../utils/response-handler';
import ChannelService from '../service/channel.service';
import * as message from '../message/channel.message';

class ChannelController {
  public createChannel = async (
    { body }: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const channel = await ChannelService.create(body);
      if (!channel._id) {
        return next(
          new HttpException(
            StatusCodes.BAD_REQUEST,
            message.MESSAGE_UNABLE_TO_CREATE_CHANNEL,
          ),
        );
      }

      return ResponseHandler.CreatedResponse(
        res,
        message.MESSAGE_CHANNEL_CREATED,
        channel,
      );
    } catch (error) {
      return next(error);
    }
  };
}
export default ChannelController;
