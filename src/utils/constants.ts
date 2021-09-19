import faker from 'faker';

const TestUtils = {
  createNewDummy() {
    return {
      name: faker.lorem.words(10),
    };
  },
};
export default TestUtils;
