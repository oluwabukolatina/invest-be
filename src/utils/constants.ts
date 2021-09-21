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
  createRandomChannelDescriptionData() {
    return faker.lorem.sentence(3);
  },

  createNewUserData() {
    return {
      email: faker.internet.email(),
      password: `${faker.internet.password(10)}1@Q`,
    };
  },
  getRandomPassword() {
    return `${faker.internet.password(10)}1@Q`;
  },
};
export default TestUtils;
