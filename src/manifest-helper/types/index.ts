import type { LoggerType, Logger, FilterPattern } from "lib-features";
import type { UniManifestHelperConfig } from "./manifest";
export type * from "./manifest";

export interface ManifestHelperOptions {
  root: string;
  logLevel: LoggerType;
  configDir: string;
  outDir: string;
  include: FilterPattern;
  exclude: FilterPattern;
  onManifestBefore: ((ctx: ManifestHelperContext) => boolean) | null;
  onManifestAfter: ((ctx: ManifestHelperContext) => boolean) | null;
}

export interface ManifestHelperContext {
  options: ManifestHelperOptions;
  logger: Logger;
  rootPath: string;
  filter: FilterPatternResult;
  loadManifestConfig: () => void;
  getVirtualModuleContext: () => string;
  writeManifestJson: () => void;
  initWatcher: () => void;
}

export type ManifestHelperDefineUniManifestConfig<T = UniManifestHelperConfig> =
  (config: UniManifestHelperConfig) => T;
