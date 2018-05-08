/**
 * 封装一下axios请求，可以的话将一些共用的请求也放在这里
 * @authors Your Name (you@example.org)
 * @date    2018-05-04 11:16:21
 * @version $Id$
 */
import Vue from 'vue'
// 引用axios
import axios from 'axios'
//引入api地址的映射地址
import path from './path'		
// 配置API接口地址
var root = process.env.NODE_ENV !== 'production' ? 'http://localhost/index.php/WXAPI/' : 'http://127.0.0.1/index.php/WXAPI/';
// 自定义判断元素类型JS
function toType (obj) {
	return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
	if(toType(o) === 'string') return o;
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
 根据接口的返回调整处理好success和failure的逻辑。
 method: 请求的方法
 url: 请求的地址对应的id，实际地址调用path.getPath(url)
 params: 请求携带的参数
 success: 请求成功的回调
 failure: 请求失败的回调
 */
 
function apiAxios (method, url, params, success, failure) {
	let urlParams = '';
 	if (params) {
 		params = filterNull(params)
	 	if(toType(params) === 'string'){   //params传入类似“/parent/1”的时候，将params接到url后面
			urlParams = params;
			params = '';
	 	}
 	}
  // axios.defaults.headers.common['Authorization'] = 'VUE';
  axios.defaults.headers.common['vue'] = 'VUE';	//跳过验证
 	axios({
	 	method: method,
	 	url: path.getPath(url)+urlParams,
	 	data: method === 'POST' || method === 'PUT' ? params : null,
	 	params: method === 'GET' || method === 'DELETE' ? params : null,
	 	baseURL: root,
	 	timeout: 30000,
	 	withCredentials: false
 	})
 .then(function (res) {
 		if (res.data.status === 1) {
 			success ? success(res.data) : Vue.toasted.show(res.data.msg);
 		} else {
 			failure ? failure(res.data) : Vue.toasted.show(res.data.msg);
 		}
 	})
 	.catch(function (err) {
	 	let res = err.response
	 	if (err) {
	 		Vue.toasted.error('error code ' + res.status);
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