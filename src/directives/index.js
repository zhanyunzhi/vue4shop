/**
 * directives
 * @authors Your Name (you@example.org)
 * @date    2018-05-25 15:28:28
 * @version $Id$
 */

import Vue from 'vue'   //引入vue框架

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  inserted: function (el) {		// 当被绑定的元素插入到 DOM 中时……
    el.focus()		// 聚焦元素
  }
})
