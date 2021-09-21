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
const auth_controller_1 = __importDefault(require("../controller/auth.controller"));
const auth_validation_1 = __importDefault(require("../validation/auth.validation"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const url = __importStar(require("../url/auth.url"));
const user_middleware_1 = __importDefault(require("../../middleware/user.middleware"));
class AuthRoute {
    constructor() {
        this.authController = new auth_controller_1.default();
        this.routes = (app) => {
            app
                .route(`${url.LOGIN_URL}`)
                .post(auth_validation_1.default.validateLogin, user_middleware_1.default.checkIfUserExists, auth_middleware_1.default.checkIfUserPasswordIsCorrect, this.authController.loginUser);
            app
                .route(`${url.REGISTER_URL}`)
                .post(auth_validation_1.default.validateRegister, user_middleware_1.default.checkIfARegisteredUser, this.authController.register);
        };
    }
}
exports.default = AuthRoute;
//# sourceMappingURL=auth.route.js.map