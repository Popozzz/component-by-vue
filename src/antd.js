import Vue from 'vue'

import {
  Button,
  Icon,
  Modal,
  Tooltip,
} from 'ant-design-vue'

[
  Button,
  Icon,
  Modal,
  Tooltip,
].forEach(antdComponent => {
  Vue.use(antdComponent);
})