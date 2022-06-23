<!--
 * @Author: LYM
 * @Date: 2022-06-22 16:59:10
 * @LastEditors: LYM
 * @LastEditTime: 2022-06-23 10:26:45
 * @Description: readme
-->

# 安装

```text
npm install vite-plugin-zip-dist-js -D

```

# 说明

```text
在vite 打包后,将打包文件压缩为zip
只在构建时中使用
使用了 configResolved 钩子
```

# 配置

```jsScript
// vite.config.js

import VitePluginDistZipJs from "vite-plugin-zip-dist-js";
import {name} from "./package.json";

export default defineConfig({
    plugins: [
        VitePluginDistZipJs({zipName: name}),
    ]
});
```

# 选项说明

|  字段 | 类型  | 默认值  |       说明     |
|  ----| ---- | ---- | ----                             |
| zipName | 字符串 | dist  | 生成的压缩包名称 |
| zipDir | 字符串 |   | 压缩文件存放路径;相对于vite项目根目录;为空时值为 viteConfig.build.outDir;不会创建目录,请确保目录已存在 |
| dayjsFormat | 字符串 | YYMMDD_HHmm  |  dayjs 日期格式 YYMMDD_HHmm,会拼在压缩包名称上,便于区分压缩包 备注：不传或者传空字符串压缩文件名不带时间 |
| includeDistDir | 布尔 | false  |  为true时  压缩包会包含dist 目录本身,  false 只压缩dist 内容 |
