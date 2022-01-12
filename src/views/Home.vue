<template>
  <div class="home">
    <HelloWorld :msg="helloMsg" />
    <!-- <GButton :buttonName="home" @transferStr="childProp"></GButton> -->
    <!-- <span>{{ count }}</span>
    <el-button type="primary" @click="increment">增加</el-button>
    <el-button
      v-loading.fullscreen.lock="fullscreenLoading"
      element-loading-text="请求中"
      element-loading-background="rgba(183,186,201,0.5)"
      type="primary"
      @click="sendReq"
      >发起请求</el-button
    > -->
  </div>
</template>

<script setup>
// @ is an alias to /src
import { getCurrentInstance, onMounted, reactive, toRefs, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
const helloMsg = ref("这是传递给helloword的信息");
// import { getCurrentInstance, onMounted, reactive, toRefs, ref } from "vue";
// import { useStore } from "vuex";
// export default {
//   name: "Home",
//   // components: {
//   //   HelloWorld,
//   // },
//   data() {
//     return {
//       home: "home2",
//     };
//   },
//   setup() {
//     const helloMsg = ref("这是传递给helloword的信息");
//     const data = reactive({
//       home: "home2",
//       count: 0,
//     });
//     const fullscreenLoading = ref(false);
//     const store = useStore();
//     // 测试store
//     data.count = store.state.a.count;
//     const increment = () => {
//       // store.commit("a/increment", 10);
//       // store.dispatch("a/increment", { count: 5 });
//       store.dispatch("a/incrementAsync", { count: 5 }).then((val) => {
//         console.log(val);
//       });
//       data.count = store.state.a.count;
//     };
//     //  测试axios
//     const sendReq = () => {
//       fullscreenLoading.value = true;
//       store
//         .dispatch("a/sendReq", { name: "222", pwd: "dfff" })
//         .then((val) => console.log(val))
//         .finally(() => {
//           fullscreenLoading.value = false;
//         });
//     };
//     // 测试父传子
//     const childProp = (msg) => {
//       console.log(msg);
//     };
//     //生命周期
//     onMounted(() => {
//       //全局变量
//       const {
//         appContext: {
//           config: { globalProperties },
//         },
//       } = getCurrentInstance();
//       //localstorage应用
//       console.log(globalProperties.$ls.get(globalProperties.$Sto.userLeve));
//     });

//     return {
//       fullscreenLoading,
//       ...toRefs(data),
//       childProp,
//       increment,
//       sendReq,
//     };
//   },
// };
</script>
