import faker from 'faker';

const TestUtils = {
  createNewDummy() {
    return {
      name: faker.lorem.words(10),
    };
  },
  createNewChannelData() {
    return {
      name: faker.lorem.words(10),
      description: faker.lorem.sentence(3),
    };
  },
};
export default TestUtils;
