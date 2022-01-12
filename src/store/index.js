import { createStore } from "vuex";
const modulesFiles = require.context("./modules", true, /\.js$/);

// 知识点2：reduce(()=> {total, currentValue, currentIndex, arr}, initValue)
// 参数： 1. 执行每条数据的函数 2. 传递给函数的初始值，可选（以前没发现初始值的妙用-可用于统计个数、去重等）
// 函数的参数
// 1. total             必需。初始值, 或者计算结束后的返回值。如果设置初始值就用初始值，否则就是函数的第一条数据
// 2. currentValue     必需。当前元素

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // 忽略第1个js
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  // 执行modulesFiles函数，返回一个对象{default: {// 文件内容}, _esModule: true}
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

export default createStore({
  modules,
});
