import setupTestDB from '../../../../utils/setup-db';
import Model from '../message.model';
import TestUtils from '../../../../utils/constants';

setupTestDB();
describe('message model test', () => {
  it('has a module', () => {
    expect(Model).toBeDefined();
  });
  it('creates a message', async () => {
    const message = TestUtils.createNewMessageData();
    const createdMessage = await Model.create(message);
    expect(message.message).toEqual(createdMessage.message);
  });
});
