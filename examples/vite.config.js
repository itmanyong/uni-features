import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
// import { UniPagesHelper, UniManifestHelper } from "uni-features";
import { UniPagesHelper, UniManifestHelper } from "../dist/index.js";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  /** 读取环境变量配置 */
  
  const config = {
    plugins: [
      UniManifestHelper(),
    //   UniPagesHelper({
    //     pagesDirs: ["src/pages/main", "src/main/user", "src/main/account"],
    //   }),
      uni(),
    ],
  };

  return config;
});
