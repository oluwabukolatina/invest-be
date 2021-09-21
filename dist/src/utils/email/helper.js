"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nunjucks_1 = __importDefault(require("nunjucks"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const EmailTemplatesHelper = {
    generateTemplate(data, templateURL) {
        nunjucks_1.default.configure({ autoescape: true });
        const html = fs_1.default
            .readFileSync(path_1.default.join(__dirname, `/template/${templateURL}`))
            .toString('utf-8');
        return nunjucks_1.default.renderString(html, data);
    },
};
exports.default = EmailTemplatesHelper;
//# sourceMappingURL=helper.js.map