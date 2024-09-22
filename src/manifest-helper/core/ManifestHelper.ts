import type {
  ManifestHelperContext,
  ManifestHelperOptions,
  UniManifestHelperConfig,
  FilterPatternResult,
} from "@/manifest-helper/types";
import type { Logger } from "lib-features";
import { resolveRoot } from "@/utils";
import { createLoggerHelper, createFilter } from "lib-features";
import { PKG_NAME } from "@/manifest-helper/config";
import { MANIFEST_CONFIG_DEFAULT } from "@/manifest-helper/config";
import { pathExistsSync, readFileSync, writeJSONSync } from "fs-extra";
import type { FSWatcher } from "chokidar";
import chokidar from "chokidar";
import json5 from "json5";
import { merge } from "lodash-es";

class ManifestHelper implements ManifestHelperContext {
  rootPath: string;
  options: ManifestHelperOptions;
  logger: Logger;
  filter: FilterPatternResult;
  outManifestPath: string;
  manifestConfigDirPath: string;
  manifestConfigFileConfig: UniManifestHelperConfig = {};
  watcher: FSWatcher | null = null;

  constructor(options: ManifestHelperOptions) {
    this.options = options;
    this.rootPath = resolveRoot(options.root);
    this.logger = createLoggerHelper(PKG_NAME, options.logLevel);
    this.filter = createFilter(options.include, options.exclude);
    this.outManifestPath = resolveRoot(options.outDir, "manifest.json");
    this.manifestConfigDirPath = resolveRoot(options.configDir, "pages.config");
    this.init()
  }

  getManifestConfig(isInit = false): UniManifestHelperConfig {
    let manifestConfig = merge(
      { ...MANIFEST_CONFIG_DEFAULT },
      this.manifestConfigFileConfig
    );
    if (!isInit) {
      let oldPagesConfig = {};
      if (pathExistsSync(this.outManifestPath)) {
        oldPagesConfig = json5.parse(
          readFileSync(this.outManifestPath, { encoding: "utf-8" })
        );
      }
      if (this.options.writeMode === "merge") {
        manifestConfig = merge(
          oldPagesConfig,
          manifestConfig
        ) as UniManifestHelperConfig;
      }
    }
    return manifestConfig as UniManifestHelperConfig;
  }

  writeManifestJson(isInit = false) {
    const manifestConfig = this.getManifestConfig(isInit);
    writeJSONSync(this.outManifestPath, manifestConfig, { spaces: 2 });
  }
  init() {
    if (!pathExistsSync(this.outManifestPath)) {
      this.logger.warn("manifest.json 文件不存在 正在自动生成... ");
      this.writeManifestJson(true);
      this.logger.warn("manifest.json 文件生成成功");
    }
  }

  initWatcher() {
    this.watcher = chokidar.watch("./", {
      cwd: this.rootPath,
      persistent: true,
      ignoreInitial: true,
      depth: Number.POSITIVE_INFINITY,
      ignored: (filePath: string) => {
        if (filePath.startsWith(".env.")) return false;
        if (filePath.endsWith("manifest.json")) return false;
        if (filePath.includes("manifest.config.")) return false;
        return true;
      },
    });
    const fileCallback = () => this.writeManifestJson();
    this.watcher.on("add", fileCallback.bind(this));
    this.watcher.on("change", fileCallback.bind(this));
    this.watcher.on("unlink", fileCallback.bind(this));
  }

  getVirtualModuleContext() {
    return JSON.stringify(this.getManifestConfig(false));
  }
}

export default ManifestHelper;
