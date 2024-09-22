import type { LoggerType, Logger } from "lib-features";
export * from "./manifest";
import type { FilterPattern } from "lib-features";
import type { UniManifestHelperConfig } from "./manifest";

export interface ManifestHelperOptions {
  root: string;
  logLevel: LoggerType;
  exclude?: FilterPattern;
  include?: FilterPattern;
  writeMode: "override" | "merge";
  configDir: string;
  outDir: string;
  onManifestBefore: ((ctx: ManifestHelperContext) => boolean) | null;
  onManifestAfter: ((ctx: ManifestHelperContext) => boolean) | null;
}

export interface ManifestHelperContext {
  options: ManifestHelperOptions;
  logger: Logger;
  rootPath: string;
  filter: FilterPatternResult;
  getVirtualModuleContext: () => string;
  writeManifestJson: () => void;
  initWatcher: () => void;
}

export type ManifestHelperDefineUniManifestConfig<T = UniManifestHelperConfig> = (config: UniManifestHelperConfig) => T;
