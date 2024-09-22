export interface UniManifestNetworkTimeout extends OvjectType {
  request?: number;
  connectSocket?: number;
  uploadFile?: number;
  downloadFile?: number;
}
export interface UniManifestUniStatistics extends OvjectType {
  enable?: boolean;
}
export interface UniManifestAppModule extends OvjectType {
  Bluetooth?: OvjectType;
  Contacts?: OvjectType;
  Fingerprint?: OvjectType;
  iBeacon?: OvjectType;
  LivePusher?: OvjectType;
  Map?: OvjectType;
  Messaging?: OvjectType;
  OAuth?: OvjectType;
  Paymen?: OvjectType;
  Push?: OvjectType;
  Share?: OvjectType;
  Speech?: OvjectType;
  SQLite?: OvjectType;
  Statistic?: OvjectType;
  VideoPlayer?: OvjectType;
}
export interface UniManifestDistribute extends OvjectType {
  android?: OvjectType;
  ios?: OvjectType;
  sdkConfigs?: OvjectType;
  orientation?: [];
}
export interface UniManifestAppPlusSplashscreen extends OvjectType {
  alwaysShowBeforeRender?: boolean;
  autoclose?: boolean;
  waiting?: boolean;
}
export interface UniManifestAppPlus extends OvjectType {
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
  uniStatistics?: OvjectType;
  webView?: OvjectType;
}
export interface UniManifestH5 extends OvjectType {
  title?: string;
  templte?: string;
  router?: OvjectType;
  async?: OvjectType;
  devServer?: OvjectType;
  publicPath?: string;
  sdkConfigs?: string;
  optimization?: OvjectType;
  uniStatistics?: OvjectType;
}
export interface UniManifestQuickapp extends OvjectType {}
export interface UniManifestMpWeixin extends OvjectType {
  appid?: string;
  setting?: OvjectType;
  functionalPages?: boolean;
  requiredBackgroundModes?: Array<string>;
  plugins?: OvjectType;
  resizable?: boolean;
  navigateToMiniProgramAppIdList?: Array<string>;
  permission?: OvjectType;
  workers?: string;
  optimization?: OvjectType;
  cloudfunctionRoot?: string;
  uniStatistics?: OvjectType;
  scopedSlotsCompiler?: string;
  mergeVirtualHostAttributes?: boolean;
  slotMultipleInstance?: boolean;
  embeddedAppIdList?: Array<string>;
  requiredPrivateInfos?: Array<string>;
  lazyCodeLoading?: string;
}
export interface UniManifestMpAlipay extends OvjectType {
  plugins?: OvjectType;
  component2?: boolean;
  enableAppxNg?: boolean;
  axmlStrictCheck?: boolean;
  enableParallelLoader?: boolean;
  enableDistFileMinify?: boolean;
  uniStatistics?: OvjectType;
  scopedSlotsCompiler?: string;
  mergeVirtualHostAttributes?: boolean;
  slotMultipleInstance?: boolean;
  lazyCodeLoading?: string;
  styleIsolation?: string;
}
export interface UniManifestMpBaidu extends OvjectType {
  appid?: string;
  requiredBackgroundModes?: Array<string>;
  prefetches?: Array<string>;
  optimization?: OvjectType;
  uniStatistics?: OvjectType;
  scopedSlotsCompiler?: string;
  slotMultipleInstance?: boolean;
  dynamicLib?: OvjectType;
}
export interface UniManifestMpToutiao extends OvjectType {
  appid?: string;
  setting?: OvjectType;
  navigateToMiniProgramAppIdList?: Array<string>;
  uniStatistics?: OvjectType;
  scopedSlotsCompiler?: string;
  slotMultipleInstance?: boolean;
}
export interface UniManifestMpLark extends OvjectType {
  appid?: string;
  setting?: OvjectType;
  navigateToMiniProgramAppIdList?: Array<string>;
  uniStatistics?: OvjectType;
  scopedSlotsCompiler?: string;
  slotMultipleInstance?: boolean;
}
export interface UniManifestMpQq extends OvjectType {
  appid?: string;
  requiredBackgroundModes?: Array<string>;
  navigateToMiniProgramAppIdList?: Array<string>;
  permission?: OvjectType;
  workers?: string;
  groupIdList?: Array<string>;
  optimization?: OvjectType;
  uniStatistics?: OvjectType;
  scopedSlotsCompiler?: string;
  slotMultipleInstance?: boolean;
}
export interface UniManifestMpKuaishou extends OvjectType {
  appid?: string;
  optimization?: OvjectType;
  uniStatistics?: OvjectType;
  scopedSlotsCompiler?: string;
  slotMultipleInstance?: boolean;
}
export interface UniManifestHelperConfig extends OvjectType {
  name: string;
  appid: string;
  description?: string;
  locale?: string | "auto";
  versionName: string;
  versionCode: string;
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
