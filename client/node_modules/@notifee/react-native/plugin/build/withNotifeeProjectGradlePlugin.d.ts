import { ConfigPlugin } from '@expo/config-plugins';
declare const withNotifeeProjectGradlePlugin: ConfigPlugin;
declare const setCompileSdkVersion: (buildGradle: string) => string;
export { setCompileSdkVersion };
export default withNotifeeProjectGradlePlugin;
