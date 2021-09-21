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
const joi_1 = __importDefault(require("joi"));
const app_validation_1 = __importDefault(require("../../../../middleware/app.validation"));
const AuthValidation = {
    validateReset(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object({
                password: joi_1.default.string()
                    .label('Password')
                    .regex(/^(?=.*[@$!%*?.&])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
                    .message('Password should contain at least 8 characters; 1 symbol, 1 number and 1 uppercase letter.')
                    .min(8)
                    .required(),
                confirm: joi_1.default.string()
                    .label('Confirm Password')
                    .regex(/^(?=.*[@$!%*?.&])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
                    .message('Confirmation Password should contain at least 8 characters; 1 symbol, 1 number and 1 uppercase letter.')
                    .min(8)
                    .required(),
                token: joi_1.default.string().label('Reset Token').required(),
            });
            yield app_validation_1.default.bodyBaseValidator(schema, request, response, next);
        });
    },
    validateRegister(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object({
                email: joi_1.default.string().email().label('Email').required(),
                password: joi_1.default.string()
                    .label('Password')
                    .regex(/^(?=.*[@$!%*?.&])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
                    .message('Password should contain at least 8 characters; 1 symbol, 1 number and 1 uppercase letter.')
                    .min(8)
                    .required(),
            });
            yield app_validation_1.default.bodyBaseValidator(schema, request, response, next);
        });
    },
    validateLogin(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object({
                email: joi_1.default.string().email().label('Email').required(),
                password: joi_1.default.string().label('Password').required(),
            });
            yield app_validation_1.default.bodyBaseValidator(schema, request, response, next);
        });
    },
    validateChangePassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object({
                currentPassword: joi_1.default.string().label('Current Password').required(),
                newPassword: joi_1.default.string()
                    .label('New Password')
                    .regex(/^(?=.*[@$!%*?.&])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
                    .message('Password should contain at least 8 characters; 1 symbol, 1 number and 1 uppercase letter.')
                    .min(8)
                    .required(),
                confirmNewPassword: joi_1.default.string()
                    .label('Confirm Password')
                    .regex(/^(?=.*[@$!%*?.&])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
                    .message('Confirmation Password should contain at least 8 characters; 1 symbol, 1 number and 1 uppercase letter.')
                    .min(8)
                    .required(),
            });
            yield app_validation_1.default.bodyBaseValidator(schema, req, res, next);
        });
    },
};
exports.default = AuthValidation;
//# sourceMappingURL=auth.validation.js.map