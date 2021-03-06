import { Application } from 'express';
import ChannelController from '../controller/channel.controller';
import * as url from '../url/channel.url';
import ChannelValidation from '../validation/channel.validation';
import auth from '../../../middleware/auth';
import UserMiddleware from '../../user/middleware/user.middleware';
import ChannelMiddleware from '../middleware/channel.middleware';
import { SEARCH_FOR_CHANNELS_URL } from '../url/channel.url';

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
    app
      .route(`${url.GET_A_CHANNEL_URL}/:channelId`)
      .get(
        ChannelMiddleware.checkIfChannelExists,
        this.channelController.getChannel,
      );
    app.route(SEARCH_FOR_CHANNELS_URL).get(this.channelController.search);
  };
}
export default ChannelRoute;
