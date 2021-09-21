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
const http_exception_1 = __importDefault(require("../utils/http-exception"));
const AppValidation = {
    bodyBaseValidator(schema, req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body = yield schema.validateAsync(req.body);
                return next();
            }
            catch (error) {
                return next(new http_exception_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, error.message.replace(/["]/gi, '')));
            }
        });
    },
};
exports.default = AppValidation;
//# sourceMappingURL=app.validation.js.map