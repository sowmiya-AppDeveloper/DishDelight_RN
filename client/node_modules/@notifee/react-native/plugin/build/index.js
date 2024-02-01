"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withNotifeeProjectGradlePlugin_1 = __importDefault(require("./withNotifeeProjectGradlePlugin"));
const withNotifee = config => {
    return (0, config_plugins_1.withPlugins)(config, [withNotifeeProjectGradlePlugin_1.default]);
};
exports.default = withNotifee;
//# sourceMappingURL=index.js.map