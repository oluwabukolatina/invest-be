import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import notFoundMiddleware from '../middleware/not-found.middleware';
import errorMiddleware from '../middleware/error.middleware';
import welcomeMessage from '../middleware/welcome.middleware';
import ChannelRoute from '../module/channel/route/channel.route';
import AuthRoute from '../module/user/auth/route/auth.route';
import MessageRoute from '../module/message/route/message.route';

dotenv.config();

class App {
  public app: express.Application;

  public channelRoute: ChannelRoute = new ChannelRoute();

  public authRoute: AuthRoute = new AuthRoute();

  public messageRoute: MessageRoute = new MessageRoute();

  constructor() {
    this.app = express();
    this.config();
    this.channelRoute.routes(this.app);
    this.authRoute.routes(this.app);
    this.messageRoute.routes(this.app);
    this.app.disable('x-powered-by');
    this.app.get('/', welcomeMessage);
    this.app.use(notFoundMiddleware);
    this.app.use(errorMiddleware);
  }

  private config = (): void => {
    this.app.use(helmet());
    this.app.use(mongoSanitize());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan('dev'));
  };
}

export default new App().app;
