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
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_exception_1 = __importDefault(require("../utils/http-exception"));
const auth_message_1 = require("../module/user/auth/message/auth.message");
const secrets_1 = require("../config/secrets");
function auth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.header('Authorization');
        if (!token)
            return next(new http_exception_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, auth_message_1.MESSAGE_UNAUTHORIZED));
        try {
            req.user = jsonwebtoken_1.default.verify(token, secrets_1.INVEST_ON_DABA_JWT_SECRET);
            return next();
        }
        catch (e) {
            return next(new http_exception_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Token Is Not Valid'));
        }
    });
}
exports.default = auth;
//# sourceMappingURL=auth.js.map