/**
 * 封装一下axios请求，可以的话将一些共用的请求也放在这里
 * @authors Your Name (you@example.org)
 * @date    2018-05-04 11:16:21
 * @version $Id$
 */
/*import Vue from 'vue'			//引入vue框架
import path from '@/api/path'		//api接口地址映射
const getHome = () => {
	Vue.$axios.get(path.getPath('home'))
		.then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
}

export {
	getHome,
}*/
// 引用axios
import axios from 'axios'
// 配置API接口地址
var root = 'http://localhost/index.php/WXAPI/'
// 自定义判断元素类型JS
function toType (obj) {
 return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
 for (var key in o) {
  if (o[key] === null) {
   delete o[key]
  }
  if (toType(o[key]) === 'string') {
   o[key] = o[key].trim()
  } else if (toType(o[key]) === 'object') {
   o[key] = filterNull(o[key])
  } else if (toType(o[key]) === 'array') {
   o[key] = filterNull(o[key])
  }
 }
 return o
}
/*
 接口处理函数
 这个函数每个项目都是不一样的，我现在调整的是适用于
 https://cnodejs.org/api/v1 的接口，如果是其他接口
 需要根据接口的参数进行调整。参考说明文档地址：
 https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
 主要是，不同的接口的成功标识和失败提示是不一致的。
 另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/
 
function apiAxios (method, url, params, success, failure) {
 if (params) {
  params = filterNull(params)
 }
 axios({
  method: method,
  url: url,
  data: method === 'POST' || method === 'PUT' ? params : null,
  params: method === 'GET' || method === 'DELETE' ? params : null,
  baseURL: root,
  withCredentials: false
 })
 .then(function (res) {
  if (res.data.status === 1) {
   if (success) {
    success(res.data)
   }
  } else {
   if (failure) {
    failure(res.data)
   } else {
    window.alert('error: ' + JSON.stringify(res.data))
   }
  }
 })
 .catch(function (err) {
  let res = err.response
  if (err) {
   window.alert('api error, HTTP CODE: ' + res.status)
  }
 })
}
 
// 返回在vue模板中的调用接口
export default {
 get: function (url, params, success, failure) {
  return apiAxios('GET', url, params, success, failure)
 },
 post: function (url, params, success, failure) {
  return apiAxios('POST', url, params, success, failure)
 },
 put: function (url, params, success, failure) {
  return apiAxios('PUT', url, params, success, failure)
 },
 delete: function (url, params, success, failure) {
  return apiAxios('DELETE', url, params, success, failure)
 }
}