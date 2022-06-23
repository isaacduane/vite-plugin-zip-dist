/*
 * @Author: LYM
 * @Date: 2022-06-22 16:59:10
 * @LastEditors: LYM
 * @LastEditTime: 2022-06-23 08:48:23
 * @Description: vite配置
 */
import { defineConfig } from "vite";
import * as path from "path";

const { name } = require("./package.json");

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["dayjs", "jszip"],
      output: {
        globals: {
          dayjs: "dayjs",
          jszip: "jszip",
        },
      },
    },
    lib: {
      entry: path.resolve(__dirname, "lib/index.js"),
      name,
      fileName: (format) => `dist.${format}.js`,
    },
  },
});
