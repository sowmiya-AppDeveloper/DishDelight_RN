"use strict";
/*
 * Copyright (c) 2016-present Invertase Limited
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationType = exports.kReactNativeNotifeeNotificationBackgroundEvent = exports.kReactNativeNotifeeNotificationEvent = exports.kReactNativeNotifeeForegroundServiceHeadlessTask = exports.noop = exports.isWeb = exports.isAndroid = exports.isIOS = exports.objectHasProperty = exports.isError = void 0;
const react_native_1 = require("react-native");
__exportStar(require("./id"), exports);
__exportStar(require("./validate"), exports);
/* eslint-disable-next-line @typescript-eslint/ban-types */
function isError(value) {
    if (Object.prototype.toString.call(value) === '[object Error]') {
        return true;
    }
    return value instanceof Error;
}
exports.isError = isError;
function objectHasProperty(target, property) {
    return Object.hasOwnProperty.call(target, property);
}
exports.objectHasProperty = objectHasProperty;
exports.isIOS = react_native_1.Platform.OS === 'ios';
exports.isAndroid = react_native_1.Platform.OS === 'android';
exports.isWeb = react_native_1.Platform.OS === 'web';
function noop() {
    // noop-🐈
}
exports.noop = noop;
exports.kReactNativeNotifeeForegroundServiceHeadlessTask = 'app.notifee.foreground-service-headless-task';
exports.kReactNativeNotifeeNotificationEvent = 'app.notifee.notification-event';
exports.kReactNativeNotifeeNotificationBackgroundEvent = 'app.notifee.notification-event-background';
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["ALL"] = 0] = "ALL";
    NotificationType[NotificationType["DISPLAYED"] = 1] = "DISPLAYED";
    NotificationType[NotificationType["TRIGGER"] = 2] = "TRIGGER";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
//# sourceMappingURL=index.js.map