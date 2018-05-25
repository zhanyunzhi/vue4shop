/**
 * directives
 * @authors Your Name (you@example.org)
 * @date    2018-05-25 15:28:28
 * @version $Id$
 */

import Vue from 'vue'   //引入vue框架

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
