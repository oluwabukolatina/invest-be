import { Application } from 'express';
import UserController from '../controller/user.controller';
import auth from '../../../middleware/shared/auth/auth';
import { USER_URL } from '../../../utils/url/shared.url';
import UserMiddleware from '../middleware/user.middleware';

class UserRoute {
  public userController: UserController = new UserController();

  public routes = (app: Application): void => {
    const { editUser, getUser, updateCollection } = this.userController;
    app
      .route(`${USER_URL}`)
      .put(auth, UserMiddleware.checkFieldsBeingUpdated, editUser);
    app.route(`${USER_URL}`).get(auth, getUser);
    app.route(`${USER_URL}/update`).get(updateCollection);
  };
}
export default UserRoute;
