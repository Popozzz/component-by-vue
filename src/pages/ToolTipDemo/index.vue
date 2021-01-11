<template>
  <div class="container">
    <h1 class="title">按钮组件</h1>
    <ul class="sample-container">
      <li class="sample">
        <ToolTip type="primary">我是一个异步按钮</ToolTip>
      </li>
    </ul>
  </div>
</template>

<script>
import ToolTip from "@components/Button";

export default {
  name: "ToolTipDemo",
  components: {
    ToolTip,
  },
  methods: {},
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
