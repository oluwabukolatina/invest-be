import { Application } from 'express';
import ChannelController from '../controller/channel.controller';
import { CREATE_CHANNEL_URL } from '../url/channel.url';
import ChannelValidation from '../validation/channel.validation';

class ChannelRoute {
  public channelController: ChannelController = new ChannelController();

  public routes = (app: Application): void => {
    app
      .route(CREATE_CHANNEL_URL)
      .post(
        ChannelValidation.validateCreateChannel,
        this.channelController.createChannel,
      );
  };
}
export default ChannelRoute;
