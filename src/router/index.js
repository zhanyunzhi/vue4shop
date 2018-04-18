import Vue from 'vue'   //引入vue框架
import Router from 'vue-router'   //引入路由依赖
import HelloWorld from '@/components/HelloWorld'    //引入页面组件，命名为HelloWorld
import Index from '@/components/Index'

Vue.use(Router)   //使用路由依赖

export default new Router({   //定义路由
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
  ]
})
