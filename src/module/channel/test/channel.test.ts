import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import app from '../../../bin/app';
import TestUtils from '../../../utils/constants';
import setupTestDB from '../../../utils/setup-db';
import * as url from '../url/channel.url';
import * as message from '../message/channel.message';
import { LOGIN_URL, REGISTER_URL } from '../../user/auth/url/auth.url';

setupTestDB();
describe('channel', () => {
  let channelName = '';
  let token = '';
  let email = '';
  let password = '';
  let channelId = '';
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
  /**
   * create channel
   */
  beforeAll(async () => {
    const result = await request(app)
      .post(url.CREATE_CHANNEL_URL)
      .send(TestUtils.createNewChannelData());
    channelName = result.body.data.name;
    channelId = result.body.data._id;
    expect(result.status).toEqual(StatusCodes.CREATED);
    expect(result.body.status).toEqual(true);
  });

  /**
   * add user to channel
   */
  beforeAll(async () => {
    const result = await request(app)
      .post(`${url.ADD_MEMBER_TO_CHANNEL_URL}/${channelId}`)
      .send(TestUtils.createNewChannelData())
      .set('Authorization', token);
    expect(result.status).toEqual(StatusCodes.OK);
    expect(result.body.message).toEqual(message.MESSAGE_USER_ADDED_TO_CHANNEL);
    expect(result.body.status).toEqual(true);
    expect(result.body).toHaveProperty('data');
    expect(result.body.data).toHaveProperty('name');
  });

  it('does not create a channel if it already exists', async () => {
    const result = await request(app).post(url.CREATE_CHANNEL_URL).send({
      name: channelName,
      description: TestUtils.createRandomChannelDescriptionData(),
    });
    expect(result.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(result.body.message).toEqual(message.MESSAGE_CHANNEL_ALREADY_EXISTS);
    expect(result.body.status).toEqual(false);
  });
  it('creates a channel', async () => {
    const result = await request(app)
      .post(url.CREATE_CHANNEL_URL)
      .send(TestUtils.createNewChannelData());
    expect(result.status).toEqual(StatusCodes.CREATED);
    expect(result.body.message).toEqual(message.MESSAGE_CHANNEL_CREATED);
    expect(result.body.status).toEqual(true);
    expect(result.body).toHaveProperty('data');
    expect(result.body.data).toHaveProperty('name');
  });
  it('does not add member to a channel they already belng to', async () => {
    const result = await request(app)
      .post(`${url.ADD_MEMBER_TO_CHANNEL_URL}/${channelId}`)
      .set('Authorization', token);
    expect(result.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(result.body.message).toEqual(
      message.MESSAGE_USER_ALREADY_BELONGS_TO_CHANNEL,
    );
  });
  it('does not add member to a channel that does not exist', async () => {
    const result = await request(app)
      .post(`${url.ADD_MEMBER_TO_CHANNEL_URL}/6149ca1a1ed0580cea5bf1ee`)
      .set('Authorization', token);
    expect(result.status).toEqual(StatusCodes.NOT_FOUND);
    expect(result.body.message).toEqual(message.MESSAGE_CHANNEL_DOES_NOT_EXIST);
    expect(result.body.status).toEqual(false);
  });
  it('does not fetch channel that does not exist', async () => {
    const result = await request(app).get(
      `${url.GET_A_CHANNEL_URL}/6149ca1a1ed0580cea5bf1ee`,
    );
    expect(result.status).toEqual(StatusCodes.NOT_FOUND);
    expect(result.body.message).toEqual(message.MESSAGE_CHANNEL_DOES_NOT_EXIST);
    expect(result.body.status).toEqual(false);
  });
  it('fetches channel and the members there', async () => {
    const result = await request(app).get(
      `${url.GET_A_CHANNEL_URL}/${channelId}`,
    );
    expect(result.status).toEqual(StatusCodes.OK);
    expect(result.body.message).toEqual(message.MESSAGE_CHANNEL_FETCHED);
    expect(result.body.status).toEqual(true);
    expect(result.body).toHaveProperty('data');
    expect(result.body.data).toHaveProperty('members');
  });
});
