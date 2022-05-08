import { resolve } from "path";

const config = {
  projectName: "info",
  date: "2022-5-8",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  alias: {
    "@": resolve(__dirname, "..", "src"),
    "@/components": resolve(__dirname, "..", "src/components"),
    "@/hooks": resolve(__dirname, "..", "src/hooks"),
    "@/context": resolve(__dirname, "..", "src/context"),
    "@/pages": resolve(__dirname, "..", "src/pages"),
    "@/models": resolve(__dirname, "..", "src/models"),
    "@/store": resolve(__dirname, "..", "src/store"),
    "@/utils": resolve(__dirname, "..", "src/utils"),
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [
      { from: "cloud", to: "dist/cloud/" }, // 将云函数文件拷贝到dist
    ],
    options: {},
  },
  framework: "react",
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
