<template>
  <div class="hello">
    <el-button type="primary" @click="setRes">{{ buttonName }}</el-button>
  </div>
</template>

<script>
export default {
  name: "GButton",
  props: {
    buttonName: String,
  },
  setup(props, context) {
    const setRes = () => {
      context.emit("transferStr", props.buttonName + "子组件");
    };
    return {
      setRes,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
