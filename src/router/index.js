import Vue from 'vue'   //引入vue框架
import Router from 'vue-router'   //引入路由依赖
//这里放自定义组件
import FooterNav from '@/components/FooterNav'   //引入页面组件，命名为FooterNav
//这里放views
import Index from '@/views/index/Index'
import Category from '@/views/index/Category'
import Cart from '@/views/index/Cart'
import My from '@/views/index/My'

Vue.use(Router);   //使用路由依赖
Vue.component('footer-nav', FooterNav);   //全局注册组件
// Vue.component('header-nav', HeaderNav);   //全局注册组件

const router = new Router({   //定义路由
  routes: [
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
      path: '/my',
      name: 'My',
      component: My,
    },
    {     //输入的路由不存在的时候，重定向到 '/'
        path:'*',
        redirect: '/'
    },
  ]
});
import store from '@/stores'
router.beforeEach((to, from, next) => {
  // console.log(store.state.header.showBack);       //路由中调用模块化后vuex中的state   
  // console.log(store.getters['footer/back']);      //路由中调用模块化后vuex中的getters
  if(to.name === 'Index'){
    store.dispatch('header/backNotShow');            //路由中调用模块化后vuex中的actions
    store.dispatch('header/homeNotShow');                 //路由中调用模块化后vuex中的mutations
  }else{
    store.dispatch('header/backShow');            //路由中调用模块化后vuex中的actions
    store.dispatch('header/homeShow');                 //路由中调用模块化后vuex中的mutations
  }
  Vue.toasted.clear();      //清除toast
  next();
});

export default router;
