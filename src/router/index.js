import Vue from 'vue'   //引入vue框架
import Router from 'vue-router'   //引入路由依赖
import HelloWorld from '@/components/HelloWorld'    //引入页面组件，命名为HelloWorld
import Index from '../views/index/Index'
import Category from '../views/index/Category'
import Cart from '../views/index/Cart'
import My from '../views/index/My'
import FooterNav from '../components/Footer';  

Vue.use(Router);   //使用路由依赖
Vue.component('footer-nav', FooterNav);   //全局注册组件

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
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'My',
      component: My,
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
