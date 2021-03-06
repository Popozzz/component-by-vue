import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routes'; 
import './antd';
import '~@assets/styles/reset.css';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
