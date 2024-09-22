export interface UniButtonItem extends Record<string, any> {
  type?:
    | "forward"
    | "back"
    | "share"
    | "favorite"
    | "home"
    | "menu"
    | "close"
    | "none";
  color?: string;
  background?: string;
  colorPressed?: string;
  float?: "left" | "right";
  fontWeight?: "normal" | "bold";
  fontSize?: string;
  fontSrc?: string;
  select?: boolean;
  text?: string;
  width?: string;
}
export interface UniSubNVueItem extends Record<string, any> {
  id?: string;
  path?: string;
  type?: "popup" | "navigationBar";
  style?: {
    position?: "static" | "absolute";
    dock?: "top" | "bottom" | "right" | "left";
    mask?: string;
    width?: string;
    height: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    margin?: string | "auto" | "left" | "right" | "top" | "bottom";
    background?: string;
  };
}
export type UniAnimationType =
  | "slide-in-right"
  | "slide-in-left"
  | "slide-in-top"
  | "slide-in-bottom"
  | "pop-out"
  | "fade-out"
  | "zoom-in"
  | "zoom-fade-in"
  | "none";
export type UniUsingComponents = Record<string, any>;
export interface UniTitleNView extends Record<string, any> {
  backgroundColor?: string;
  buttons?: UniButtonItem[];
  titleColor?: string;
  titleOverflow?: "clip" | "ellipsis";
  titleText?: string;
  titleSize?: string;
  type?: "default" | "transparent" | "float";
  tags?: Record<string, any>[];
  searchInput?: UniSearchInput;
  homeButton?: boolean;
  autoBackButton?: boolean;
  backButton?: boolean;
  backgroundImage?: string;
  backgroundRepeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
  titleAlign?: "left" | "center" | "auto";
  blurEffect?: "dark" | "light" | "extralight" | "none";
  coverage?: string;
  splitLine?: boolean | null | undefined;
  subtitleColor?: string;
  subtitleSize?: string | "auto";
  subtitleOverflow?: "clip" | "ellipsis";
  subtitleText?: string;
  titleIcon?: string;
  titleIconRadius?: string;
}
export interface UniSearchInput extends Record<string, any> {
  autoFocus?: boolean;
  align?: "left" | "center" | "right";
  backgroundColor?: string;
  borderRadius?: string;
  placeholder?: string;
  placeholderColor?: string;
  disabled?: boolean;
}
export interface UniPagesConfigGlobalStyleAppPlus extends Record<string, any> {
  background?: string;
  titleNView?: UniTitleNView;
  subNVues?: UniSubNVueItem[];
  bounce?: string | "none";
  popGesture?: "close" | "none";
  softinputNavBar?: string | "auto" | "none";
  softinputMode?: "adjustResize" | "adjustPan";
  pullToRefresh?: object;
  scrollIndicator?: string | "none";
  animationType?: UniAnimationType;
  animationDuration?: number;
  SplitLineStyles?: {
    color?: string;
    height?: string;
  };
}
export interface UniPagesConfigGlobalStyleH5 extends Record<string, any> {
  titleNView?: {
    backgroundColor?: string;
    buttons?: UniButtonItem[];
    titleColor?: string;
    titleText?: string;
    titleSize?: string;
    type?: "transparent" | "default";
    searchInput?: UniSearchInput;
  } & Record<string, any>;
  pullToRefresh?: {
    color?: string;
    offset?: string;
  } & Record<string, any>;
}
export interface UniPagesConfigGlobalStyleMpAlipay extends Record<string, any> {
  allowsBounceVertical?: "YES" | "NO";
  titleImage?: string;
  transparentTitle?: "always" | "auto" | "none";
  titlePenetrate?: string | "YES" | "NO";
  showTitleLoading?: string | "YES" | "NO";
  backgroundImageUrl?: string;
  backgroundImageColor?: string;
  gestureBack?: string | "YES" | "NO";
  enableScrollBar?: string | "YES" | "NO";
}
export interface UniPagesConfigGlobalStyleMpWeixin extends Record<string, any> {
  homeButton?: boolean;
  backgroundColorTop?: string;
  backgroundColorBottom?: string;
  restartStrategy?: "homePage" | "homePageAndLatestPage";
  initialRenderingCache?: "static" | "dynamic";
  visualEffectInBackground?: "hidden" | "none";
  handleWebviewPreload?: "static" | "manual" | "auto";
}
export interface UniPagesConfigGlobalStyleMpBaidu extends Record<string, any> {
  textSizeAdjust?: "auto" | "none";
}
export interface UniPagesConfigGlobalStyleMpToutiao
  extends Record<string, any> {}
export interface UniPagesConfigGlobalStyleMpLark extends Record<string, any> {}
export interface UniPagesConfigGlobalStyleMpQq extends Record<string, any> {}
export interface UniPagesConfigGlobalStyleMpKuaishou
  extends Record<string, any> {}
export interface UniPagesConfigGlobalStyleMpJd extends Record<string, any> {}
export interface UniPagesStyleCommonType extends Record<string, any> {
  navigationBarBackgroundColor?: string;
  navigationBarTextStyle?: "black" | "white";
  navigationBarTitleText?: string;
  navigationStyle?: "default" | "custom";
  backgroundColor?: string;
  backgroundTextStyle?: "dark" | "light";
  enablePullDownRefresh?: boolean;
  onReachBottomDistance?: number;
  backgroundColorTop?: string;
  backgroundColorBottom?: string;
  titleImage?: string;
  transparentTitle?: string;
  titlePenetrate?: string;
  "app-plus"?: UniPagesConfigGlobalStyleAppPlus;
  h5?: UniPagesConfigGlobalStyleH5;
  "mp-alipay"?: UniPagesConfigGlobalStyleMpAlipay;
  "mp-weixin"?: UniPagesConfigGlobalStyleMpWeixin;
  "mp-baidu"?: UniPagesConfigGlobalStyleMpBaidu;
  "mp-toutiao"?: UniPagesConfigGlobalStyleMpToutiao;
  "mp-lark"?: UniPagesConfigGlobalStyleMpLark;
  "mp-qq"?: UniPagesConfigGlobalStyleMpQq;
  "mp-kuaishou"?: UniPagesConfigGlobalStyleMpKuaishou;
  "mp-jd"?: UniPagesConfigGlobalStyleMpJd;
  usingComponents?: UniUsingComponents;
  leftWindow?: boolean;
  topWindow?: boolean;
  rightWindow?: boolean;
  maxWidth?: number;
}
export interface UniPagesConfigEasycom extends Record<string, any> {
  autoscan: boolean;
  custom: Record<string, any>;
}
export interface UniPagesConfigGlobalStyle extends UniPagesStyleCommonType {
  pageOrientation?: "portrait" | "landscape" | "auto";
  animationType?: UniAnimationType;
  animationDuration?: number;
  renderingMode?: string | "seperated";
  rpxCalcMaxDeviceWidth?: number;
  rpxCalcBaseDeviceWidth?: number;
  rpxCalcIncludeWidth?: number;
  dynamicRpx?: boolean;
}
export interface UniPagesPageStyleType extends UniPagesStyleCommonType {
  navigationBarShadow?: {
    colorType?:
      | "grey"
      | "blue"
      | "green"
      | "orange"
      | "red"
      | "yellow"
      | string;
  };
  disableScroll?: boolean;
  disableSwipeBack?: boolean;
}
export interface UniPagesPageItem extends Record<string, any> {
  type: string;
  path: string;
  style?: Record<string, any | UniPagesPageStyleType>;
  needLogin?: boolean;
}
export interface UniIconfontObject extends Record<string, any> {
  text?: string;
  color?: string;
  fontSize?: string;
  selectedText?: string;
  selectedColor?: string;
}
export interface UniPagesTabbarListItem extends Record<string, any> {
  text: string;
  pagePath: string;
  iconPath?: string;
  visible?: boolean;
  selectedIconPath?: string;
  iconfont?: UniIconfontObject;
}
export interface UniPagesTbbarMidButton extends Record<string, any> {
  width?: string;
  height?: string;
  text?: string;
  iconPath?: string;
  iconWidth?: string;
  backgroundImage?: string;
  iconfont?: UniIconfontObject;
}
export interface UniPagesTabbar extends Record<string, any> {
  color: string;
  selectedColor: string;
  backgroundColor: string;
  list?: UniPagesTabbarListItem[];
  borderStyle?: "black" | "white";
  blurEffect?: "dark" | "extralight" | "light" | "none";
  position?: "bottom" | "top";
  fontSize?: string;
  iconWidth?: string;
  spacing?: string;
  height?: string;
  midButton?: UniPagesTbbarMidButton;
  iconfontSrc?: string;
  backgroundImage?: string;
  backgroundRepeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
  redDotColor?: string;
}
export interface UniPagesConditionListItem extends Record<string, any> {
  name: string;
  path: string;
  query?: string;
}
export interface UniPagesCondition extends Record<string, any> {
  current: number;
  list: UniPagesConditionListItem[];
}
export interface UniPagesSubPackageItem extends Record<string, any> {
  root: string;
  pages: UniPagesPageItem[];
}
export interface UniPagesPreloadRuleValue extends Record<string, any> {
  packages: Array<string | "__APP__">;
  network?: "all" | "wifi";
}
export interface UniPagesPreloadRule
  extends Record<string, UniPagesPreloadRuleValue> {}
export interface UniPagesWorkers extends Record<string, any> {
  path: string;
  isSubpackage?: boolean;
}
export interface UniPagesWindow extends Record<string, any> {
  path?: string;
  style?: UniPagesPageStyleType;
  matchMedia?: { minWidth?: number };
}
export interface UniPagesConfig extends Record<string, any> {
  pages: UniPagesPageItem[];
  easycom?: UniPagesConfigEasycom;
  globalStyle?: UniPagesConfigGlobalStyle;
  tabBar?: UniPagesTabbar;
  condition?: UniPagesCondition;
  subPackages?: UniPagesSubPackageItem[];
  preloadRule?: UniPagesPreloadRule;
  workers?: string | UniPagesWorkers;
  leftWindow?: UniPagesWindow;
  topWindow?: UniPagesWindow;
  rightWindow?: UniPagesWindow;
  uniIdRouter?: Record<string, any>;
  entryPagePath?: string;
}
