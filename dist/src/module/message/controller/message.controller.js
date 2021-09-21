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
const http_exception_1 = __importDefault(require("../../../utils/http-exception"));
const response_handler_1 = __importDefault(require("../../../utils/response-handler"));
const message_service_1 = __importDefault(require("../service/message.service"));
const message_message_1 = require("../message.message");
class MessageController {
    constructor() {
        this.createMessage = ({ body, user }, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const message = yield message_service_1.default.create({
                    message: body.message,
                    user: user.id,
                });
                if (!message) {
                    return next(new http_exception_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, 'Not created'));
                }
                return response_handler_1.default.CreatedResponse(res, 'Message Created', message);
            }
            catch (error) {
                return next(error);
            }
        });
        this.getMessages = (request, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const messages = yield message_service_1.default.findAll();
                return response_handler_1.default.CreatedResponse(res, message_message_1.MESSAGE_MESSAGES_FETCHED, {
                    messages,
                });
            }
            catch (error) {
                return next(error);
            }
        });
    }
}
exports.default = MessageController;
//# sourceMappingURL=message.controller.js.map