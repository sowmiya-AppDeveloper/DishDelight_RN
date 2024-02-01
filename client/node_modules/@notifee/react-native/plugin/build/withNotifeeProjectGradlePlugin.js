"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCompileSdkVersion = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const withNotifeeProjectGradlePlugin = config => {
    return (0, config_plugins_1.withProjectBuildGradle)(config, ({ modResults, ...subConfig }) => {
        if (modResults.language !== 'groovy') {
            config_plugins_1.WarningAggregator.addWarningAndroid('withNotifee', `Cannot automatically configure project build.gradle if it's not groovy`);
            return { modResults, ...subConfig };
        }
        modResults.contents = setCompileSdkVersion(modResults.contents);
        return { modResults, ...subConfig };
    });
};
const setCompileSdkVersion = (buildGradle) => {
    const pattern = /compileSdkVersion = 30/g;
    if (!buildGradle.match(pattern)) {
        return buildGradle;
    }
    return buildGradle.replace(/compileSdkVersion = 30/, `compileSdkVersion = 31`);
};
exports.setCompileSdkVersion = setCompileSdkVersion;
exports.default = withNotifeeProjectGradlePlugin;
//# sourceMappingURL=withNotifeeProjectGradlePlugin.js.map