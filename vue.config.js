// const TerserPlugin = require('terser-webpack-plugin');
const path = require("path");
// const appHttpCb = require('./mock/mock-config/mock-tools.js').appHttpCb;

function resolve(dir) {
  return path.join(__dirname, dir);
}
//vue.config.js配置参考见：https://cli.vuejs.org/zh/config/
module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
   * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
   */
  // 基本路径
  // Type: string
  // Default: '/'
  publicPath: process.env.VUE_APP_BASE_URL + "/",
  // 输出文件目录
  // Type: string
  // Default: 'dist'
  outputDir: "web",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  // Type: string
  // Default: ''
  assetsDir: "static",
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  // Type: string
  // Default: 'index.html'
  indexPath: "index.html",
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
  // 然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。
  // 如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  // Type: boolean
  // Default: true
  filenameHashing: true,
  // eslint-loader 是否在保存的时候检查，等于false时禁用eslint-loader
  // Type: boolean | 'error'
  // Default: true
  lintOnSave: process.env.NODE_ENV === "development",
  // 浏览器 overlay 同时显示警告和错误
  /* devServers: {
    overlay: {
      warnings: true,
      errors: true
    }
  }, */
  // Webpack配置，链式操作
  // 参考见：https://github.com/neutrinojs/webpack-chain
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      //
    }
    // -----------module配置-------------------------------
    // 图片压缩
    /* config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({
            bypassOnDebug: true
        })
        .end(); */
    config.module
      .rule("txt")
      .test(/\.txt$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
    /* config.module
      .rule('js')
      .include.add(resolve('/node_modules/element-ui'))
      .end(); */

    // 可忽略引用的文件的扩展名
    config.resolve.extensions.add(".js").add(".vue").add(".json");
    // ----别名-------------
    config.resolve.alias.set("@", resolve("src"));
  },
  configureWebpack: (config) => {
    // 该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
    // Webpack简单的配置方式
    let baseConfig = {};
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      let prodConfig = {
        // optimization: {
        //   minimize: true,
        //   minimizer: [
        //     new TerserPlugin({
        //       parallel: true, //启用/禁用多进程并发运行功能
        //       terserOptions: {
        //         format: {
        //           comments: false
        //         }
        //       },
        //       extractComments: false
        //     })
        //   ]
        // }
      };
      return Object.assign(baseConfig, prodConfig);
    } else {
      // 为开发环境修改配置...
      let devConfig = {
        devtool: "source-map",
      };
      return Object.assign(baseConfig, devConfig);
    }
  },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  // Type: boolean
  // Default: true
  productionSourceMap: process.env.NODE_ENV !== "production",
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    // Default: 生产环境下是 true，开发环境下是 false
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
    // 同样当构建 Web Components 组件时它总是会被禁用 (样式是 inline 的并注入到了 shadowRoot 中)。
    // 当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS。
    // 提取 CSS 在开发环境模式下是默认不开启的，因为它和 CSS 热重载不兼容。然而，你仍然可以将这个值显性地设置为 true 在所有情况下都强制提取。
    // extract: true,

    // 开启 CSS source maps?
    sourceMap: process.env.NODE_ENV !== "production",
    // css预设器配置项
    loaderOptions: {
      // 给 sass-loader 传递选项
      // 配置全局样式变量
      sass: {
        //使用dart-sass
        // implementation: require('sass'),
        implementation: require("node-sass"),
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        additionalData: '@import "@/assets/sass/_mixin.scss";',
      },
    },
    // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    requireModuleExtension: true,
  },
  // Type: boolean
  // Default: require('os').cpus().length > 1
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: require("os").cpus().length > 1,
  // 是否启用dll,启用dll后，我们的动态库文件每次打包生成的vendor的[chunkhash]值就会一样，其值可以是 true/false,也可以制定特定的代码库。
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // Type: Object
  // 向 PWA 插件传递选项。
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      // 设置代理
      "^/mallos/api": {
        //target: 'http://172.19.12.153:9090', // 接口域名
        target: "http://10.12.6.24:30808",
        changeOrigin: true, // 是否跨域
        // pathRewrite: {
        //   '^.*/mallos/api': '' //需要rewrite重写的,
        // }
      },
    },
    // before: app => {
    //   const cb = appHttpCb;
    //   app.get('/*', cb);
    //   app.post('/*', cb);
    // },
    // after: app => {
    //   const cb = appHttpCb;
    //   app.get('/*', cb);
    //   app.post('/*', cb);
    // }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
};
