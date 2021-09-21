import { Application } from 'express';
import AuthController from '../controller/auth.controller';
import AuthValidation from '../validation/auth.validation';
import AuthMiddleware from '../middlewares/auth.middleware';
import * as url from '../url/auth.url';
import UserMiddleware from '../../middleware/user.middleware';

class AuthRoute {
  public authController: AuthController = new AuthController();

  public routes = (app: Application): void => {
    app
      .route(`${url.LOGIN_URL}`)
      .post(
        AuthValidation.validateLogin,
        UserMiddleware.checkIfUserExists,
        AuthMiddleware.checkIfUserPasswordIsCorrect,
        this.authController.loginUser,
      );
    app
      .route(`${url.REGISTER_URL}`)
      .post(
        AuthValidation.validateRegister,
        UserMiddleware.checkIfARegisteredUser,
        this.authController.register,
      );
  };
}
export default AuthRoute;
