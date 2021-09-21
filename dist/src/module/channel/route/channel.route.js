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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const channel_controller_1 = __importDefault(require("../controller/channel.controller"));
const url = __importStar(require("../url/channel.url"));
const channel_validation_1 = __importDefault(require("../validation/channel.validation"));
const auth_1 = __importDefault(require("../../../middleware/auth"));
const user_middleware_1 = __importDefault(require("../../user/middleware/user.middleware"));
const channel_middleware_1 = __importDefault(require("../middleware/channel.middleware"));
const channel_url_1 = require("../url/channel.url");
class ChannelRoute {
    constructor() {
        this.channelController = new channel_controller_1.default();
        this.routes = (app) => {
            app
                .route(url.CREATE_CHANNEL_URL)
                .post(channel_validation_1.default.validateCreateChannel, channel_middleware_1.default.checkIfChannelAlreadyExists, this.channelController.createChannel);
            app
                .route(`${url.ADD_MEMBER_TO_CHANNEL_URL}/:channelId`)
                .post(auth_1.default, user_middleware_1.default.checkIfAValidUser, channel_middleware_1.default.checkIfChannelExists, channel_middleware_1.default.checkIfUserAlreadyBelongsToChannel, this.channelController.addMember);
            app
                .route(`${url.GET_A_CHANNEL_URL}/:channelId`)
                .get(channel_middleware_1.default.checkIfChannelExists, this.channelController.getChannel);
            app.route(channel_url_1.SEARCH_FOR_CHANNELS_URL).get(this.channelController.search);
        };
    }
}
exports.default = ChannelRoute;
//# sourceMappingURL=channel.route.js.map