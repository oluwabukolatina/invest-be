"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const response_handler_1 = __importDefault(require("../utils/response-handler"));
const logger_1 = __importDefault(require("../config/logger"));
function errorMiddleware(error, request, response, next) {
    const status = error.status || 500;
    const message = error.message.toString() || 'Something went wrong';
    logger_1.default.error(`status - ${status}, message - ${message},url - ${request.originalUrl},method - ${request.method},IP - ${request.ip}
   `);
    if (status === http_status_codes_1.StatusCodes.BAD_REQUEST) {
        return response_handler_1.default.BadRequestResponse(response, message);
    }
    return response_handler_1.default.ServerErrorResponse(response, status, message);
}
exports.default = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map