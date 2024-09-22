export interface UniManifestNetworkTimeout extends Record<string, any> {
  request?: number;
  connectSocket?: number;
  uploadFile?: number;
  downloadFile?: number;
}
export interface UniManifestUniStatistics extends Record<string, any> {
  enable?: boolean;
}
export interface UniManifestAppModule extends Record<string, any> {
  Bluetooth?: Record<string, any>;
  Contacts?: Record<string, any>;
  Fingerprint?: Record<string, any>;
  iBeacon?: Record<string, any>;
  LivePusher?: Record<string, any>;
  Map?: Record<string, any>;
  Messaging?: Record<string, any>;
  OAuth?: Record<string, any>;
  Paymen?: Record<string, any>;
  Push?: Record<string, any>;
  Share?: Record<string, any>;
  Speech?: Record<string, any>;
  SQLite?: Record<string, any>;
  Statistic?: Record<string, any>;
  VideoPlayer?: Record<string, any>;
}
export interface UniManifestDistribute extends Record<string, any> {
  android?: Record<string, any>;
  ios?: Record<string, any>;
  sdkConfigs?: Record<string, any>;
  orientation?: [];
}
export interface UniManifestAppPlusSplashscreen extends Record<string, any> {
  alwaysShowBeforeRender?: boolean;
  autoclose?: boolean;
  waiting?: boolean;
  delay?: number;
}
export interface UniManifestAppPlus extends Record<string, any> {
  splashscreen?: UniManifestAppPlusSplashscreen;
  screenOrientation?: Array<
    | "portrait-primary"
    | "portrait-secondary"
    | "landscape-primary"
    | "landscape-secondary"
  >;
  modules?: UniManifestAppModule;
  distribute?: UniManifestDistribute;
  nvueCompiler?: string | "weex" | "unj-app";
  nvueStyleCompiler?: string | "weex" | "css";
  renderer?: string | "native";
  nvueLaunchMode?: string | "normal" | "fast";
  nvue?: {
    "flex-direction"?: "column" | "row" | "column-reverse" | "row-reverse";
  };
  optimization?: { subPackages?: boolean };
  runmode?: string | "normal" | "liberate";
  uniStatistics?: Record<string, any>;
  webView?: Record<string, any>;
}
export interface UniManifestH5 extends Record<string, any> {
  title?: string;
  templte?: string;
  router?: Record<string, any>;
  async?: Record<string, any>;
  devServer?: Record<string, any>;
  publicPath?: string;
  sdkConfigs?: string;
  optimization?: Record<string, any>;
  uniStatistics?: Record<string, any>;
}
export interface UniManifestQuickapp extends Record<string, any> {}
export interface UniManifestMpWeixin extends Record<string, any> {
  appid?: string;
  setting?: Record<string, any>;
  functionalPages?: boolean;
  requiredBackgroundModes?: Array<string>;
  plugins?: Record<string, any>;
  resizable?: boolean;
  navigateToMiniProgramAppIdList?: Array<string>;
  permission?: Record<string, any>;
  workers?: string;
  optimization?: Record<string, any>;
  cloudfunctionRoot?: string;
  uniStatistics?: Record<string, any>;
  scopedSlotsCompiler?: string;
  mergeVirtualHostAttributes?: boolean;
  slotMultipleInstance?: boolean;
  embeddedAppIdList?: Array<string>;
  requiredPrivateInfos?: Array<string>;
  lazyCodeLoading?: string;
}
export interface UniManifestMpAlipay extends Record<string, any> {
  plugins?: Record<string, any>;
  component2?: boolean;
  enableAppxNg?: boolean;
  axmlStrictCheck?: boolean;
  enableParallelLoader?: boolean;
  enableDistFileMinify?: boolean;
  uniStatistics?: Record<string, any>;
  scopedSlotsCompiler?: string;
  mergeVirtualHostAttributes?: boolean;
  slotMultipleInstance?: boolean;
  lazyCodeLoading?: string;
  styleIsolation?: string;
}
export interface UniManifestMpBaidu extends Record<string, any> {
  appid?: string;
  requiredBackgroundModes?: Array<string>;
  prefetches?: Array<string>;
  optimization?: Record<string, any>;
  uniStatistics?: Record<string, any>;
  scopedSlotsCompiler?: string;
  slotMultipleInstance?: boolean;
  dynamicLib?: Record<string, any>;
}
export interface UniManifestMpToutiao extends Record<string, any> {
  appid?: string;
  setting?: Record<string, any>;
  navigateToMiniProgramAppIdList?: Array<string>;
  uniStatistics?: Record<string, any>;
  scopedSlotsCompiler?: string;
  slotMultipleInstance?: boolean;
}
export interface UniManifestMpLark extends Record<string, any> {
  appid?: string;
  setting?: Record<string, any>;
  navigateToMiniProgramAppIdList?: Array<string>;
  uniStatistics?: Record<string, any>;
  scopedSlotsCompiler?: string;
  slotMultipleInstance?: boolean;
}
export interface UniManifestMpQq extends Record<string, any> {
  appid?: string;
  requiredBackgroundModes?: Array<string>;
  navigateToMiniProgramAppIdList?: Array<string>;
  permission?: Record<string, any>;
  workers?: string;
  groupIdList?: Array<string>;
  optimization?: Record<string, any>;
  uniStatistics?: Record<string, any>;
  scopedSlotsCompiler?: string;
  slotMultipleInstance?: boolean;
}
export interface UniManifestMpKuaishou extends Record<string, any> {
  appid?: string;
  optimization?: Record<string, any>;
  uniStatistics?: Record<string, any>;
  scopedSlotsCompiler?: string;
  slotMultipleInstance?: boolean;
}
export interface UniManifestHelperConfig extends Record<string, any> {
  name: string;
  appid: string;
  description?: string;
  locale?: string | "auto";
  versionName: string;
  versionCode: number;
  transformPx?: boolean;
  networkTimeout?: UniManifestNetworkTimeout;
  debug?: boolean;
  uniStatistics?: UniManifestUniStatistics;
  "app-plus"?: UniManifestAppPlus;
  h5?: UniManifestH5;
  quickapp?: UniManifestQuickapp;
  "mp-weixin"?: UniManifestMpWeixin;
  "mp-alipay"?: UniManifestMpAlipay;
  "mp-baidu"?: UniManifestMpBaidu;
  "mp-toutiao"?: UniManifestMpToutiao;
  "mp-lark"?: UniManifestMpLark;
  "mp-qq"?: UniManifestMpQq;
  "mp-kuaishou"?: UniManifestMpKuaishou;
}
