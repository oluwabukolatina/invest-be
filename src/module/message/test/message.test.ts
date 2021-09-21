import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import app from '../../../bin/app';
import * as url from '../url/message.url';
import TestUtils from '../../../utils/constants';
import setupTestDB from '../../../utils/setup-db';
import * as message from '../message.message';
import { LOGIN_URL, REGISTER_URL } from '../../user/auth/url/auth.url';

setupTestDB();
describe('message', () => {
  let token = '';
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
    const response = await request(app).post(`${REGISTER_URL}`).send(newUser);
    email = response.body.data.email;
    password = newUser.password;
  });
  /**
   * log user in tot get token
   */
  beforeAll(async () => {
    const res = await request(app)
      .post(`${LOGIN_URL}`)
      .send({ email, password });
    token = res.body.data.token;
    expect(res.body.status).toEqual(true);
  });
  it('creates a message', async () => {
    const result = await request(app)
      .post(url.CREATE_MESSAGE_URL)
      .send(TestUtils.createNewMessageData())
      .set('Authorization', token);
    expect(result.status).toEqual(StatusCodes.CREATED);
    expect(result.body.message).toEqual('Message Created');
    expect(result.body.status).toEqual(true);
    expect(result.body).toHaveProperty('data');
    expect(result.body.data).toHaveProperty('_id');
  });
  it('fetches all messages', async () => {
    const result = await request(app).get(url.GET_MESSAGES_URL);
    expect(result.status).toEqual(StatusCodes.CREATED);
    expect(result.body.message).toEqual(message.MESSAGE_MESSAGES_FETCHED);
    expect(result.body.status).toEqual(true);
    expect(result.body).toHaveProperty('data');
    expect(result.body.data).toHaveProperty('messages');
  });
});
