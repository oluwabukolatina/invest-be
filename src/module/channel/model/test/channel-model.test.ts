import setupTestDB from '../../../../utils/setup-db';
import Model from '../channel.model';
import TestUtils from '../../../../utils/constants';

setupTestDB();
describe('channel model test', () => {
  it('has a module', () => {
    expect(Model).toBeDefined();
  });
  it('creates a user', async () => {
    const channel = TestUtils.createNewChannelData();
    const createdChannel = await Model.create(channel);
    expect(channel.name).toEqual(createdChannel.name);
    expect(channel.description).toEqual(createdChannel.description);
  });
});
