import VueRouter from 'vue-router'

import Home from '@pages/Home'
import ButtonDemo from '@pages/ButtonDemo'
import FigureDemo from '@pages/FigureDemo'

const routes = [
  {
    path: '/',
    component: Home, 
    meta: {
      title: '主页',
    }
  },
  { 
    path: '/home',
    component: Home,
    meta: {
      title: '主页',
    }
  },
  { 
    path: '/buttonDemo',
    component: ButtonDemo,
    meta: {
      title: '按钮组件示例'
    }
  },
  { 
    path: '/figureDemo',
    component: FigureDemo,
    meta: {
      title: '图片组件示例'
    }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
})

export default router