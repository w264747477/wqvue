<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  msg: String,
});
console.log(props);
// name: "HelloWorld",
// props: {
//   msg: String,
// },
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
