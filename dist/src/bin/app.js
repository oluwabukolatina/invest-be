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
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const not_found_middleware_1 = __importDefault(require("../middleware/not-found.middleware"));
const error_middleware_1 = __importDefault(require("../middleware/error.middleware"));
const welcome_middleware_1 = __importDefault(require("../middleware/welcome.middleware"));
const channel_route_1 = __importDefault(require("../module/channel/route/channel.route"));
const auth_route_1 = __importDefault(require("../module/user/auth/route/auth.route"));
const message_route_1 = __importDefault(require("../module/message/route/message.route"));
dotenv.config();
class App {
    constructor() {
        this.channelRoute = new channel_route_1.default();
        this.authRoute = new auth_route_1.default();
        this.messageRoute = new message_route_1.default();
        this.config = () => {
            this.app.use(helmet_1.default());
            this.app.use(express_mongo_sanitize_1.default());
            this.app.use(cors_1.default());
            this.app.use(express_1.default.json());
            this.app.use(morgan_1.default('dev'));
        };
        this.app = express_1.default();
        this.config();
        this.channelRoute.routes(this.app);
        this.authRoute.routes(this.app);
        this.messageRoute.routes(this.app);
        this.app.disable('x-powered-by');
        this.app.get('/', welcome_middleware_1.default);
        this.app.use(not_found_middleware_1.default);
        this.app.use(error_middleware_1.default);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map