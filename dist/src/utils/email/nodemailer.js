"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const secrets_1 = require("../../config/secrets");
const env = require('../../../src/config/env')[String(secrets_1.ENVIRONMENT)];
const transporter = nodemailer_1.default.createTransport({
    host: 'mail.google.com',
    service: 'gmail',
    port: 465,
    auth: {
        user: env.emailUserName,
        pass: env.emailPassword,
    },
    secure: false,
});
exports.default = transporter;
//# sourceMappingURL=nodemailer.js.map