<template>
  <div class="img-container" @click="handleClick" :style="containerStyle">
    <img
      v-show="!loading"
      :class="[
        'img',
        [allowOpenUrl, allowPreview].some((a) => a) && 'link',
        shapeClass,
      ]"
      :style="imgStyle"
      :src="realSrc"
      @load="handleLoad"
      @error="handleError"
      :width="width"
      :height="height"
    />

    <span v-if="allowLoading && loading" class="loading">
      <a-icon type="loading" />
    </span>

    <a-modal
      v-if="allowPreview"
      :visible="previewVisible"
      :width="680"
      :footer="null"
      :bodyStyle="{
        padding: '60px 20px 20px',
        display: 'flex',
        minHeight: '400px',
        justifyContent: 'center',
        alignItems: 'center',
      }"
      @cancel="handlePreviewCancel"
    >
      <div :class="'modal-content'">
        <Figure
          :allow-loading="true"
          :src="previewSrc || realSrc"
          :width="640"
        />
      </div>
    </a-modal>
  </div>
</template>

<script>
import defaultImg from "~@assets/images/default_img.svg";
import errorImg from "~@assets/images/error_img.svg";

export default {
  name: "Figure",
  props: {
    allowPreview: {
      // 允许预览
      type: Boolean,
      default: false,
    },
    allowLoading: {
      // 允许加载中显示loading
      type: Boolean,
      default: false,
    },
    allowOpenUrl: {
      // 允许点击跳转打开图片
      type: Boolean,
      default: false,
    },
    defaultSrc: {
      // 默认图片
      type: String,
      default: defaultImg,
    },
    errorSrc: {
      // 错误图片
      type: String,
      default: errorImg,
    },
    src: {
      // 图片地址
      type: String,
      default: "",
    },
    previewSrc: {
      // 图片地址
      type: String,
      default: "",
    },
    shape: {
      // 图片形状
      type: String,
      default: "square", // Enum{ 'circle', 'square' }
    },
    mode: {
      // 图片形状
      type: String,
      default: "", // Enum{ 'circle', 'square' }
    },
    width: {
      // 图片宽度
      type: [Number, String],
    },
    height: {
      // 图片高度
      type: [Number, String],
    },
  },
  data() {
    return {
      loading: false,
      realSrc: "",
      previewVisible: false,
    };
  },
  created() {
    if (this.allowLoading) {
      this.loading = true;
    }

    if (!this.$props.src) {
      this.realSrc = this.$props.defaultSrc;
    } else {
      this.realSrc = this.$props.src;
    }
  },
  mounted() {},
  computed: {
    shapeClass() {
      return `img-shape-${this.shape}`;
    },
    containerStyle() {
      const { width, height } = this;
      return {
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      };
    },
    imgStyle() {
      const { containerStyle, mode } = this;
      return {
        ...containerStyle,
        objectFit: mode,
      };
    },
  },
  methods: {
    async handleLoad() {
      await new Promise((resolve) => {
        setTimeout(resolve, 6000);
      });
      this.loading = false;
    },
    async handleError() {
      await new Promise((resolve) => {
        setTimeout(resolve, 3000);
      });
      this.loading = false;
      this.realSrc = this.$props.errorSrc;
    },
    handleClick() {
      if (this.$props.allowOpenUrl) {
        window.open(this.realSrc);
      }

      if (this.$props.allowPreview) {
        this.previewVisible = true;
      }
      this.$emit("click");
    },
    handlePreviewCancel() {
      this.previewVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped src="./index.scss"></style>
