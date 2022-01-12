module.exports = {
  // 默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。ESLint一旦发现配置文件中有   "root": true，它就会停止在父级目录中寻找。
  root: true,
  env: {
    node: true, // 支持 node语法
    es6: true, // 支持 es6 语法
  },
  extends: [
    "plugin:vue/essential", //vue文件的规则
    "eslint:recommended", //prettier规则较少,补充推荐的规则
    "prettier", //prettier规则(prettier放在最后，因为后面的配置项会覆盖前面的)
  ],
  plugins: [
    "prettier", //eslint-plugin-prettier的简称
    "vue", //eslint-plugin-vue的简称
    // 此插件用来识别.html 和 .vue文件中的js代码
    "html", //eslint-plugin-html的简称
  ],
  globals: {
    AMap: true,
    VUE_APP_INFO: true,
  },
  // 参考见：https://eslint.org/docs/rules/
  rules: {
    "prettier/prettier": "error", //对不符合prettier规则的地方进行error告警(eslint格式化时才能同时也按照prettier格式化)
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": ["error", { args: "none", caughtErrors: "none" }],
  },
  parserOptions: {
    // sourceType: 'module',
    // 对Babel解析器的包装使其与 ESLint 兼容。
    parser: "babel-eslint",
  },
};
