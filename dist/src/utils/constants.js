"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("faker"));
const TestUtils = {
    createNewChannelData() {
        return {
            name: faker_1.default.lorem.words(10),
            description: faker_1.default.lorem.sentence(3),
        };
    },
    createRandomChannelDescriptionData() {
        return faker_1.default.lorem.sentence(3);
    },
    createNewUserData() {
        return {
            email: faker_1.default.internet.email(),
            password: `${faker_1.default.internet.password(10)}1@Q`,
        };
    },
    getRandomPassword() {
        return `${faker_1.default.internet.password(10)}1@Q`;
    },
    createNewMessageData() {
        return {
            message: faker_1.default.lorem.sentence(10),
        };
    },
};
exports.default = TestUtils;
//# sourceMappingURL=constants.js.map