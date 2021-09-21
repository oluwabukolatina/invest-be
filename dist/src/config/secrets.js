"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.INVEST_ON_DABA_JWT_EXPIRY = exports.INVEST_ON_DABA_JWT_SECRET = exports.ENVIRONMENT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const logger_1 = __importDefault(require("./logger"));
if (fs_1.default.existsSync('.env')) {
    logger_1.default.debug('Using .env file to supply config environment variables');
    dotenv_1.default.config({ path: '.env' });
}
function throwIfUndefined(secret, name) {
    if (!secret) {
        logger_1.default.error(`${name} must not be undefined`);
        return process.exit(1);
    }
    return secret;
}
exports.ENVIRONMENT = throwIfUndefined(process.env.NODE_ENV, 'NODE_ENV');
throwIfUndefined(process.env.INVEST_ON_DABA_DEV_DATABASE_URL, 'INVEST_ON_DABA_DEV_DATABASE_URL');
throwIfUndefined(process.env.INVEST_ON_DABA_TEST_DATABASE_URL, 'INVEST_ON_DABA_TEST_DATABASE_URL');
exports.INVEST_ON_DABA_JWT_SECRET = throwIfUndefined(process.env.INVEST_ON_DABA_JWT_SECRET, 'INVEST_ON_DABA_JWT_SECRET');
exports.INVEST_ON_DABA_JWT_EXPIRY = throwIfUndefined(process.env.INVEST_ON_DABA_JWT_EXPIRY, 'INVEST_ON_DABA_JWT_EXPIRY');
throwIfUndefined(process.env.INVEST_ON_DABA_DATABASE_URL, 'INVEST_ON_DABA_DATABASE_URL');
//# sourceMappingURL=secrets.js.map