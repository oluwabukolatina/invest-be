import setupTestDB from '../../../../utils/setup-db';
import Model from '../dummy.model';
import TestUtils from '../../../../utils/constants';

setupTestDB();
describe('user model test', () => {
  it('has a module', () => {
    expect(Model).toBeDefined();
  });
  it('creates a user', async () => {
    const dummy = TestUtils.createNewDummy();
    const createdDummy = await Model.create(dummy);
    expect(dummy.name).toEqual(createdDummy.name);
  });
});
