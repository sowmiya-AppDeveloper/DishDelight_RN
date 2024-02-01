"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerType = exports.TimeUnit = exports.RepeatFrequency = void 0;
/**
 * An interface representing the different frequencies which can be used with `TimestampTrigger.repeatFrequency`.
 *
 * View the [Triggers](/react-native/docs/triggers) documentation to learn more.
 */
var RepeatFrequency;
(function (RepeatFrequency) {
    RepeatFrequency[RepeatFrequency["NONE"] = -1] = "NONE";
    RepeatFrequency[RepeatFrequency["HOURLY"] = 0] = "HOURLY";
    RepeatFrequency[RepeatFrequency["DAILY"] = 1] = "DAILY";
    RepeatFrequency[RepeatFrequency["WEEKLY"] = 2] = "WEEKLY";
})(RepeatFrequency = exports.RepeatFrequency || (exports.RepeatFrequency = {}));
/**
 * An interface representing the different units of time which can be used with `IntervalTrigger.timeUnit`.
 *
 * View the [Triggers](/react-native/docs/triggers) documentation to learn more.
 */
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["SECONDS"] = "SECONDS";
    TimeUnit["MINUTES"] = "MINUTES";
    TimeUnit["HOURS"] = "HOURS";
    TimeUnit["DAYS"] = "DAYS";
})(TimeUnit = exports.TimeUnit || (exports.TimeUnit = {}));
/**
 * Available Trigger Types.
 *
 * View the [Triggers](/react-native/docs/triggers) documentation to learn more with example usage.
 */
var TriggerType;
(function (TriggerType) {
    TriggerType[TriggerType["TIMESTAMP"] = 0] = "TIMESTAMP";
    TriggerType[TriggerType["INTERVAL"] = 1] = "INTERVAL";
})(TriggerType = exports.TriggerType || (exports.TriggerType = {}));
//# sourceMappingURL=Trigger.js.map