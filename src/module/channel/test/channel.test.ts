import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import app from '../../../bin/app';
import TestUtils from '../../../utils/constants';
import setupTestDB from '../../../utils/setup-db';
import { CREATE_CHANNEL_URL } from '../url/channel.url';
import { MESSAGE_CHANNEL_CREATED } from '../message/channel.message';

setupTestDB();
describe('channel', () => {
  it('creates a channel', async () => {
    const result = await request(app)
      .post(CREATE_CHANNEL_URL)
      .send(TestUtils.createNewChannelData());
    expect(result.status).toEqual(StatusCodes.CREATED);
    expect(result.body.message).toEqual(MESSAGE_CHANNEL_CREATED);
    expect(result.body.status).toEqual(true);
    expect(result.body).toHaveProperty('data');
  });
});
