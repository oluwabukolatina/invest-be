import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import * as message from '../../../message/user.message';
import TestUtils from '../../../../../utils/constants';
import app from '../../../../../bin/app';
import * as url from '../../url/auth.url';
import { MESSAGE_USER_CREATED } from '../../message/auth.message';
import setupTestDB from '../../../../../utils/setup-db';

setupTestDB();
describe('Auth', () => {
  let email = '';
  let password = '';
  /**
   * new user
   */
  beforeAll(async () => {
    const newUser = {
      email: 'oluwabukolatinatestuser@gmail.com',
      password: 'password1@A',
    };
    const response = await request(app)
      .post(`${url.REGISTER_URL}`)
      .send(newUser);
    email = response.body.data.email;
    password = newUser.password;
  });

  /**
   * log user in tot get token
   */
  beforeAll(async () => {
    const res = await request(app)
      .post(`${url.LOGIN_URL}`)
      .send({ email, password });
    expect(res.body.status).toEqual(true);
  });

  describe('/auth', () => {
    it('should create a user', async () => {
      const res = await request(app)
        .post(`${url.REGISTER_URL}`)
        .send(TestUtils.createNewUserData());
      expect(res.status).toEqual(StatusCodes.CREATED);
      expect(res.body.message).toEqual(MESSAGE_USER_CREATED);
      expect(res.body.status).toEqual(true);
      expect(res.body).toHaveProperty('data');
    });
    it('should not create a user that already exists', async () => {
      const result = await request(app)
        .post(`${url.REGISTER_URL}`)
        .send({ email, password });
      expect(result.status).toEqual(StatusCodes.BAD_REQUEST);
      expect(result.body.status).toEqual(false);
    });
    it('/login should NOT login a user that does not exist', (done) => {
      request(app)
        .post(`${url.LOGIN_URL}`)
        .send(TestUtils.createNewUserData())
        .end((err, res) => {
          expect(res.status).toEqual(StatusCodes.NOT_FOUND);
          expect(res.body.message).toEqual(message.MESSAGE_USER_DOES_NOT_EXIST);
          expect(res.body.status).toEqual(false);
          done();
        });
    });
    it('/login should NOT login a user if password is incorrect', (done) => {
      request(app)
        .post(`${url.LOGIN_URL}`)
        .send({
          email,
          password: TestUtils.getRandomPassword().password,
        })
        .end((err, res) => {
          expect(res.status).toEqual(StatusCodes.BAD_REQUEST);
          expect(res.body.message).toEqual(message.MESSAGE_INVALID_CREDENTIALS);
          expect(res.body.status).toEqual(false);
          done();
        });
    });
    it('should login a user and return token', (done) => {
      request(app)
        .post(`${url.LOGIN_URL}`)
        .send({ email, password })
        .end((err, res) => {
          expect(res.body.message).toEqual('Log in successful');
          expect(res.body.status).toEqual(true);
          expect(res.body.data).toHaveProperty('id');
          done();
        });
    });
  });
});
