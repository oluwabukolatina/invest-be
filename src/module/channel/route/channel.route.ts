import { Application } from 'express';
import ChannelController from '../controller/channel.controller';
import * as url from '../url/channel.url';
import ChannelValidation from '../validation/channel.validation';
import auth from '../../../middleware/auth';
import UserMiddleware from '../../user/middleware/user.middleware';
import ChannelMiddleware from '../middleware/channel.middleware';

class ChannelRoute {
  public channelController: ChannelController = new ChannelController();

  public routes = (app: Application): void => {
    app
      .route(url.CREATE_CHANNEL_URL)
      .post(
        ChannelValidation.validateCreateChannel,
        ChannelMiddleware.checkIfChannelAlreadyExists,
        this.channelController.createChannel,
      );
    app
      .route(`${url.ADD_MEMBER_TO_CHANNEL_URL}/:channelId`)
      .post(
        auth,
        UserMiddleware.checkIfAValidUser,
        ChannelMiddleware.checkIfChannelExists,
        ChannelMiddleware.checkIfUserAlreadyBelongsToChannel,
        this.channelController.addMember,
      );
  };
}
export default ChannelRoute;
