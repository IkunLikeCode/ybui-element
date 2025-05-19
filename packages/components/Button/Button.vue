<script setup lang="ts">
import { ref } from "vue";
defineOptions({
  name: "YbButton",
});
const value = ref(0);
</script>

<template>
  <div class="app">
    <button
      @click="
        () => {
          value++;
        }
      ">
      {{ value }}
    </button>
  </div>
</template>

<style lang="less" scoped></style>
