<template>
  <a-button v-bind="$attrs" @click="handleClick" :loading="loading">
    <slot />
  </a-button>
</template>

<script>
export default {
  name: "Button",
  props: {
    click: Function,
  },
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    handleClick() {
      if (this.loading || !this.click) return;
      const clickStatus = this.click();

      if (clickStatus?.constructor === Promise) {
        this.loading = true;
      }

      clickStatus.finally(() => {
        this.loading = false;
      });
    },
  },
};
</script>
