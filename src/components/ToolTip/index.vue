<template>
  <div class="container" :style="containerStyle">
    <a-tooltip v-bind="$attrs" :title="text">
      <span>{{ text }}</span>
    </a-tooltip>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "ToolTip",
  props: {
    text: {
      type: String,
      default: "",
    },
    width: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    containerStyle() {
      const { width } = this;

      return {
        width: typeof width === "number" ? `${width}px` : width,
      };
    },
  },
  methods: {},
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
