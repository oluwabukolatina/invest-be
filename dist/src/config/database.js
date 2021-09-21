"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const secrets_1 = require("./secrets");
const logger_1 = __importDefault(require("./logger"));
const env = require('./env')[String(secrets_1.ENVIRONMENT)];
function connectToDb() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        };
        // return connect(env.database, options);
        try {
            yield mongoose_1.connect(env.database, options);
            logger_1.default.info('MongoDB connection SUCCESS');
        }
        catch (error) {
            logger_1.default.error('MongoDB connection FAIL');
            process.exit(1);
        }
    });
}
function disconnectFromDB() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.disconnect();
    });
}
exports.default = { connectToDb, disconnectFromDB };
//# sourceMappingURL=database.js.map