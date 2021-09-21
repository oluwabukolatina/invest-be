"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const secrets_1 = require("../../../../config/secrets");
const helper_1 = __importDefault(require("../../../../utils/email/helper"));
const env = require('../../../../config/env')[String(secrets_1.ENVIRONMENT)];
const AuthEmailHelper = {
    createWelcomeEmail(options) {
        const { email } = options;
        return {
            subject: 'Welcome To Invest on Daba',
            from: env.emailUsername,
            to: email,
            html: helper_1.default.generateTemplate({ email }, 'welcome-email.html'),
        };
    },
};
exports.default = AuthEmailHelper;
//# sourceMappingURL=auth-email.helper.js.map