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
const channel_model_1 = __importDefault(require("../model/channel.model"));
class ChannelService {
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield channel_model_1.default.create(data);
            }
            catch (e) {
                return e;
            }
        });
    }
    static findOne(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield channel_model_1.default.findOne(data).populate('members', '-password');
            }
            catch (e) {
                return e;
            }
        });
    }
    static addMember(channelId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield channel_model_1.default.findByIdAndUpdate(channelId, { $push: params }, { new: true, useFindAndModify: false });
            }
            catch (e) {
                return e;
            }
        });
    }
    static findAll(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield channel_model_1.default.find(data).populate('members', '-password');
            }
            catch (e) {
                return e;
            }
        });
    }
}
exports.default = ChannelService;
//# sourceMappingURL=channel.service.js.map