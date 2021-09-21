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
const http_exception_1 = __importDefault(require("../../../utils/http-exception"));
const channel_service_1 = __importDefault(require("../service/channel.service"));
const message = __importStar(require("../message/channel.message"));
const ChannelMiddleware = {
    checkIfChannelExists(request, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const channel = yield channel_service_1.default.findOne({
                    _id: request.params.channelId,
                });
                if (!channel) {
                    return next(new http_exception_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, message.MESSAGE_CHANNEL_DOES_NOT_EXIST));
                }
                return next();
            }
            catch (e) {
                return next(e);
            }
        });
    },
    checkIfChannelAlreadyExists(request, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const channel = yield channel_service_1.default.findOne({
                    name: request.body.name,
                });
                if (channel) {
                    return next(new http_exception_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, message.MESSAGE_CHANNEL_ALREADY_EXISTS));
                }
                return next();
            }
            catch (e) {
                return next(e);
            }
        });
    },
    checkIfUserAlreadyBelongsToChannel({ user, params }, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const channel = yield channel_service_1.default.findOne({
                    members: user.id,
                    _id: params.channelId,
                });
                if (channel) {
                    return next(new http_exception_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, message.MESSAGE_USER_ALREADY_BELONGS_TO_CHANNEL));
                }
                return next();
            }
            catch (e) {
                return next(e);
            }
        });
    },
};
exports.default = ChannelMiddleware;
//# sourceMappingURL=channel.middleware.js.map