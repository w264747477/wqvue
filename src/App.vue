<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import Sto from "../src/modal/storageName";
import { getCurrentInstance, onMounted } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    onMounted(() => {
      // console.log(this)
      const {
        appContext: {
          config: { globalProperties },
        },
      } = getCurrentInstance();
      console.log(globalProperties.$Sto);
      console.log(
        globalProperties.$ls.set(globalProperties.$Sto.userLeve, "1")
      );
    });
  },

  beforeCreate() {
    // this.$ls.set(this.Sto.userLevel, "1");
  },
};
</script>
<style>
<style > html,
body,
#app {
  height: 100%;
}
.el-message {
  top: 150px !important;
}
* {
  scroll-behavior: smooth;
}
</style>
