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
import { merge, cloneDeep, isEqual } from "lodash-es";
import { loadConfig } from "unconfig";

const manifestConfigFileExtensions = [
  "ts",
  "mts",
  "cts",
  "js",
  "mjs",
  "cjs",
  "json",
];

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
    this.manifestConfigDirPath = resolveRoot(
      options.configDir,
      "manifest.config"
    );
    this.init();
  }

  async loadManifestConfig() {
    const loadConfigSource = {
      files: this.manifestConfigDirPath,
      extensions: manifestConfigFileExtensions,
    };
    const { config } = await loadConfig<UniManifestHelperConfig>({
      sources: [loadConfigSource],
    });
    if (!isEqual(this.manifestConfigFileConfig, config)) {
      this.manifestConfigFileConfig = config;
      this.writeManifestJson();
    }
  }

  getManifestConfig(): UniManifestHelperConfig {
    return merge(
      cloneDeep(MANIFEST_CONFIG_DEFAULT),
      this.manifestConfigFileConfig
    ) as UniManifestHelperConfig;
  }

  writeManifestJson(isInit = false) {
    if (!isInit) {
      this.logger.info("manifest.json 开始生成");
      if (
        this.options.onManifestBefore &&
        this.options.onManifestBefore(this) === false
      )
        return;
    }
    const manifestConfig = this.getManifestConfig();
    writeJSONSync(this.outManifestPath, manifestConfig, { spaces: 2 });
    if (!isInit) {
      this.logger.info("manifest.json 生成完成");
      if (
        this.options.onManifestAfter &&
        this.options.onManifestAfter(this) === false
      )
        return;
    }
  }

  initWatcher() {
    this.watcher = chokidar.watch(".", {
      cwd: this.rootPath,
      persistent: true,
      depth: 3,
      ignored: (path) => {
        if (path === this.rootPath) return false;
        return !this.filter(path);
      },
    });
    const fileCallback = () => {
      this.loadManifestConfig();
    };
    this.watcher.on("ready", () => {
      this.watcher.on("add", fileCallback.bind(this));
      this.watcher.on("change", fileCallback.bind(this));
      this.watcher.on("unlink", fileCallback.bind(this));
    });
  }

  getVirtualModuleContext() {
    return JSON.stringify(this.getManifestConfig());
  }

  init() {
    this.writeManifestJson(true);
  }
}

export default ManifestHelper;
