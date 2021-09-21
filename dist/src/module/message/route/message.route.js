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
const message_controller_1 = __importDefault(require("../controller/message.controller"));
const url = __importStar(require("../url/message.url"));
const message_validation_1 = __importDefault(require("../validation/message.validation"));
const auth_1 = __importDefault(require("../../../middleware/auth"));
class MessageRoute {
    constructor() {
        this.messageController = new message_controller_1.default();
        this.routes = (app) => {
            app
                .route(url.CREATE_MESSAGE_URL)
                .post(auth_1.default, message_validation_1.default.validateCreateMessage, this.messageController.createMessage);
            app.route(url.GET_MESSAGES_URL).get(this.messageController.getMessages);
        };
    }
}
exports.default = MessageRoute;
//# sourceMappingURL=message.route.js.map