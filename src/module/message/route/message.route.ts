import { Application } from 'express';
import MessageController from '../controller/message.controller';
import * as url from '../url/message.url';
import MessageValidation from '../validation/message.validation';
import auth from '../../../middleware/auth';

class MessageRoute {
  public messageController: MessageController = new MessageController();

  public routes = (app: Application): void => {
    app
      .route(url.CREATE_MESSAGE_URL)
      .post(
        auth,
        MessageValidation.validateCreateMessage,
        this.messageController.createMessage,
      );
    app.route(url.GET_MESSAGES_URL).get(this.messageController.getMessages);
  };
}
export default MessageRoute;
