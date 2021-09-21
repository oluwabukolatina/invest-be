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
const nodemailer_1 = __importDefault(require("./nodemailer"));
const logger_1 = __importDefault(require("../../config/logger"));
const Email = {
    sendWithNodemailer(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return nodemailer_1.default.sendMail(options, (err, info) => {
                if (err) {
                    logger_1.default.error('err', err);
                }
                else {
                    logger_1.default.info('Mail Sent Successfully', info);
                }
            });
        });
    },
    sendEmail(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sendWithNodemailer(options);
        });
    },
};
exports.default = Email;
//# sourceMappingURL=email.js.map