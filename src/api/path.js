/**
 * 后台api接口地址映射
 * @authors Your Name (you@example.org)
 * @date    2018-05-04 10:24:22
 * @version $Id$
 */
const path = {
	'home': 'Index/home',
	'goodsCategoryList': 'Goods/goodsCategoryList',
}
const getPath = (id) => {
	return path[id]
};
export default {
	getPath
}
