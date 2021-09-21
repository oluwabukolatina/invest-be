"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
class ResponseHandler {
    static ErrorResponse(res, code, message, data) {
        return res.status(code).json({ message, status: false, data });
    }
    static JoiErrorResponse(res, code, data, message) {
        return res.status(code).json({ status: false, message, data });
    }
    static SuccessResponse(res, code, message = '', data) {
        return res.status(code).json({ message, status: true, data });
    }
    static CreatedResponse(res, message = '', data) {
        return res
            .status(http_status_codes_1.StatusCodes.CREATED)
            .json({ message, status: true, data });
    }
    static ServerErrorResponse(res, code, message, data) {
        return res.status(code).json({ message, status: false, data });
    }
    static BadRequestResponse(res, message, data) {
        return res
            .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
            .json({ message, status: false, data });
    }
    static NotFoundResponse(res, message, data) {
        return res
            .status(http_status_codes_1.StatusCodes.NOT_FOUND)
            .json({ message, status: false, data });
    }
}
exports.default = ResponseHandler;
//# sourceMappingURL=response-handler.js.map