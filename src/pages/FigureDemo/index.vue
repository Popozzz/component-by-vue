<template>
  <div class="container">
    <h1 class="title">图片组件</h1>
    <ul class="sample-container">
      <li class="sample">
        <p>1. 普通使用，无src展示默认图片</p>
        <Figure :width="80" :height="80" />
      </li>
      <li class="sample">
        <p>2. 圆形图片(头像)</p>
        <Figure :width="80" :height="80" shape="circle" mode="cover" />
      </li>
      <li class="sample">
        <p>3. 有loading过程的图片</p>
        <Figure
          :allow-loading="true"
          :width="160"
          :height="160"
          src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2882056046,1733761483&fm=26&gp=0.jpg"
        />
      </li>
      <li class="sample">
        <p>4. 请求图片失败</p>
        <Figure
          :allow-loading="true"
          :width="80"
          :height="80"
          src="https://dss.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2882056046,1733761483&fm=26&gp=0.jpg"
        />
      </li>
      <li class="sample">
        <p>5. 可点击跳转新窗口页面预览的图片</p>
        <Figure
          :allow-open-url="true"
          :width="160"
          :height="160"
          src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2882056046,1733761483&fm=26&gp=0.jpg"
        />
      </li>
      <li class="sample">
        <p>6. 可点击弹出弹窗预览的图片</p>
        <Figure
          :allow-preview="true"
          :width="160"
          :height="160"
          src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2882056046,1733761483&fm=26&gp=0.jpg"
        />
      </li>
      <li class="sample">
        <p>7. mode参数接受不同object-fit的值</p>
        <p>mode="contain"</p>
        <Figure
          :width="160"
          :height="160"
          mode="contain"
          src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2882056046,1733761483&fm=26&gp=0.jpg"
        />
        <p>mode="cover"</p>
        <Figure
          :width="160"
          :height="160"
          mode="cover"
          src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2882056046,1733761483&fm=26&gp=0.jpg"
        />
        <p>mode="fill"</p>
        <Figure
          :width="160"
          :height="160"
          mode="fill"
          src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2882056046,1733761483&fm=26&gp=0.jpg"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Figure from "@components/Figure";

export default {
  name: "FigureDemo",
  components: {
    Figure,
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
