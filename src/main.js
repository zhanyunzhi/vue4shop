// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'			//引入vue框架
import App from './App'			//引入根组件
import router from './router'	//引入路由设置
import store from './store'
// 引用API文件
import api from './api'		
Vue.prototype.$api = api;		// 将API方法绑定到全局

//引入提示框vue-toasted
import Toasted from 'vue-toasted';		
Vue.use(Toasted);

// Vue.prototype.$toasted = Toasted

Vue.config.productionTip = false	//关闭生产模式下给出的提示

// axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ? 'localhost/index.php/WXAPI/' : '127.0.0.1/index.php/WXAPI/';	//设置网络请求的baseURL
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 配置请求信息
/*var $axios = axios.create({
　baseURL: process.env.NODE_ENV !== 'production' ? 'localhost/index.php/WXAPI/' : '127.0.0.1/index.php/WXAPI/',
　timeout: '3000',  //请求超时时间
　headers: {'X-Custom-Header': 'foobar'}     //header传值，例如：Authorization
})*/
// Vue.prototype.$axios = axios;

/* eslint-disable no-new 定义实例*/
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
