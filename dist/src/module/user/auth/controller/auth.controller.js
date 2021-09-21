"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const user_service_1 = __importDefault(require("../../service/user.service"));
const jwt_1 = __importDefault(require("../helper/jwt"));
const http_exception_1 = __importDefault(require("../../../../utils/http-exception"));
const message = __importStar(require("../message/auth.message"));
const response_handler_1 = __importDefault(require("../../../../utils/response-handler"));
const auth_helper_1 = __importDefault(require("../helper/auth-helper"));
const email_1 = __importDefault(require("../../../../utils/email/email"));
const auth_email_helper_1 = __importDefault(require("../helper/auth-email.helper"));
class AuthController {
    constructor() {
        this.loginUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body;
            try {
                const existingUser = yield user_service_1.default.findUser({ email });
                const token = jwt_1.default.createToken(existingUser._id, email);
                if (!token) {
                    return next(new http_exception_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, message.MESSAGE_UNABLE_TO_CREATE_JWT_TOKEN));
                }
                return response_handler_1.default.SuccessResponse(res, http_status_codes_1.StatusCodes.OK, message.MESSAGE_LOGIN_SUCCESS, {
                    email: existingUser.email,
                    id: existingUser._id,
                    token,
                });
            }
            catch (err) {
                return next(err);
            }
        });
        this.register = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const newUser = yield user_service_1.default.createUser({
                    email,
                    password,
                });
                if (!newUser) {
                    return next(new http_exception_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Something went wrong while trying to create user account'));
                }
                newUser.password = yield auth_helper_1.default.hashPassword(newUser.password);
                const saved = yield user_service_1.default.saveUser(newUser);
                if (saved) {
                    yield email_1.default.sendEmail(auth_email_helper_1.default.createWelcomeEmail({ email: saved.email }));
                    return response_handler_1.default.SuccessResponse(res, http_status_codes_1.StatusCodes.CREATED, message.MESSAGE_USER_CREATED, {
                        id: saved._id,
                        email: saved.email,
                        createdAt: saved.createdAt,
                    });
                }
                return next(new http_exception_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Unable to save user'));
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map