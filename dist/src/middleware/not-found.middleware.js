"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const http_exception_1 = __importDefault(require("../utils/http-exception"));
function notFoundMiddleware(request, response, next) {
    return next(new http_exception_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, `${request.originalUrl} does not exist`));
}
exports.default = notFoundMiddleware;
//# sourceMappingURL=not-found.middleware.js.map