import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import app from '../../../bin/app';
import { CREATE_DUMMY_URL } from '../url/dummy.url';
import TestUtils from '../../../utils/constants';
import setupTestDB from '../../../utils/setup-db';

setupTestDB();
describe('dummy', () => {
  it('creates a dummy and returns the appropriate response', async () => {
    const result = await request(app)
      .post(CREATE_DUMMY_URL)
      .send(TestUtils.createNewDummy());
    expect(result.status).toEqual(StatusCodes.CREATED);
    expect(result.body.message).toEqual('Created');
    expect(result.body.status).toEqual(true);
    expect(result.body).toHaveProperty('data');
  });
});
