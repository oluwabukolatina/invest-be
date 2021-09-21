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

  public addMember = async (
    { user, params }: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const channel = await ChannelService.addMember(params.channelId, {
        members: user.id,
      });

      if (!channel._id) {
        return next(
          new HttpException(
            StatusCodes.BAD_REQUEST,
            message.MESSAGE_UNABLE_TO_ADD_USER_TO_CHANNEL,
          ),
        );
      }

      return ResponseHandler.SuccessResponse(
        res,
        StatusCodes.OK,
        message.MESSAGE_USER_ADDED_TO_CHANNEL,
        {
          id: channel._id,
          name: channel.name,
          description: channel.description,
        },
      );
    } catch (error) {
      return next(error);
    }
  };
}
export default ChannelController;
