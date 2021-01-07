<template>
  <div class="container">
    <h1 class="title">按钮组件</h1>
    <ul class="sample-container">
      <li class="sample">
        <Button type="primary" :click="handleClick">我是一个异步按钮</Button>
      </li>
      <li class="sample">
        <Button>我是一个同步按钮</Button>
      </li>
    </ul>
  </div>
</template>

<script>
import Button from "@components/Button";

export default {
  name: "ButtonDemo",
  components: {
    Button,
  },
  methods: {
    async handleClick() {
      await new Promise((resolve) => {
        setTimeout(resolve, 5000);
      });
      console.log("hhhh");
    },
  },
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
