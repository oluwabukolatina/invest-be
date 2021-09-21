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
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("../config/database"));
const logger_1 = __importDefault(require("../config/logger"));
if (!process.env.PORT) {
    process.exit(1);
}
const APP_PORT = parseInt(process.env.PORT, 10) || 3000;
app_1.default.listen(APP_PORT, () => {
    database_1.default.connectToDb()
        .then(() => {
        logger_1.default.info(`Server started at ${APP_PORT}`);
    })
        .catch(() => __awaiter(void 0, void 0, void 0, function* () {
        logger_1.default.error('Unable to connect to the database');
    }));
});
//# sourceMappingURL=server.js.map