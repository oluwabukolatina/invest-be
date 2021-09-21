import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import HttpException from '../../../utils/http-exception';
import ChannelService from '../service/channel.service';
import * as message from '../message/channel.message';

const ChannelMiddleware = {
  async checkIfChannelExists(
    request: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const channel = await ChannelService.findOne({
        _id: request.params.channelId,
      });
      if (!channel) {
        return next(
          new HttpException(
            StatusCodes.NOT_FOUND,
            message.MESSAGE_CHANNEL_DOES_NOT_EXIST,
          ),
        );
      }
      return next();
    } catch (e) {
      return next(e);
    }
  },
  async checkIfChannelAlreadyExists(
    request: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const channel = await ChannelService.findOne({
        name: request.body.name,
      });
      if (channel) {
        return next(
          new HttpException(
            StatusCodes.BAD_REQUEST,
            message.MESSAGE_CHANNEL_ALREADY_EXISTS,
          ),
        );
      }
      return next();
    } catch (e) {
      return next(e);
    }
  },
  async checkIfUserAlreadyBelongsToChannel(
    { user }: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const channel = await ChannelService.findOne({
        members: user.id,
      });
      if (channel) {
        return next(
          new HttpException(
            StatusCodes.BAD_REQUEST,
            message.MESSAGE_USER_ALREADY_BELONGS_TO_CHANNEL,
          ),
        );
      }
      return next();
    } catch (e) {
      return next(e);
    }
  },
};
export default ChannelMiddleware;
