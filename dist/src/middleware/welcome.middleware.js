"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const response_handler_1 = __importDefault(require("../utils/response-handler"));
function welcomeMessage(request, response) {
    response_handler_1.default.SuccessResponse(response, http_status_codes_1.StatusCodes.OK, 'Hello!');
}
exports.default = welcomeMessage;
//# sourceMappingURL=welcome.middleware.js.map