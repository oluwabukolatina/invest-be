import jwt from 'jsonwebtoken';
import { IUser } from '../../type/user.type';
import * as secret from '../../../../config/secrets';

const Jwt = {
  createToken(id: IUser['_id'], email: IUser['email']) {
    return jwt.sign({ id, email }, secret.INVEST_ON_DABA_JWT_SECRET, {
      expiresIn: secret.INVEST_ON_DABA_JWT_EXPIRY,
    });
  },
};

export default Jwt;
