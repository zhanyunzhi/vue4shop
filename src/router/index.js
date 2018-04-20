import Vue from 'vue'   //引入vue框架
import Router from 'vue-router'   //引入路由依赖
import HelloWorld from '@/components/HelloWorld'    //引入页面组件，命名为HelloWorld
import Index from '../views/index/index'
import Manage from '../views/index/manage'

Vue.use(Router)   //使用路由依赖

export default new Router({   //定义路由
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage,
      /*children:[      //子路由由children表示
          {
              path:'list',
              name: 'list',
              component:List
          },
          {
              path:'edit',
              name: 'edit',
              component:Edit
          }
      ]*/
    },
    {     //输入的路由不存在的时候，重定向到 '/'
        path:'*',
        redirect: '/'
    },
  ]
})
