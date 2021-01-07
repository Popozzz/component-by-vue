import Vue from 'vue'

import {
  Button,
  Icon,
  Modal,
} from 'ant-design-vue'

[
  Button,
  Icon,
  Modal,
].forEach(antdComponent => {
  Vue.use(antdComponent);
})