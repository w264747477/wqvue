import { createApp } from "vue";
import "normalize.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Storage from "vue-ls";
import Sto from "./modal/storageName";
import GButton from "./components/gButton";
//“Vue.use”方法会阻止插件重复注册，因此手动调用install方法将插件注册到VUE中
// Storage.install(Vue, {
//   namespace: process.env.VUE_APP_STORAGE_PREFIX, // key prefix
//   name: "ss", // name variable Vue.[ss] or this.[$ss],
//   storage: "session", // storage name session, local, memory
// });

const app = createApp(App);
app.config.globalProperties.$Sto = Sto;
app.component("GButton", GButton);
let options = {
  namespace: process.env.VUE_APP_STORAGE_PREFIX, // key prefix
  name: "ls", // name variable Vue.[ls] or this.[$ls],
  storage: "local", // storage name session, local, memory
};
app.use(store).use(router).use(ElementPlus).use(Storage, options);
app.mount("#app");
