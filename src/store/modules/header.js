/**
 * vuex store
 * @authors Your Name (you@example.org)
 * @date    2018-05-02 11:27:45
 * @version $Id$
 */

//定义字段，类似建立了数据库表
const state = {
	showBack: true,
	showHome: true
}
//转变字段，有点类似操作数据库
const mutations = {
	backShow(state) {
		state.showBack = true;
	},
	homeShow(state) {
		state.showHome = true;
	},
	backNotShow(state) {
		state.showBack = false;
	},
	homeNotShow(state) {
		state.showHome = false;
	}
}
//类似操作数据库之前写一些处理的逻辑
const actions = {
	backShow: ({ commit }) => commit('backShow'),
	homeShow: ({ commit }) => commit('homeShow'),
	backNotShow: ({ commit }) => commit('backNotShow'),
	homeNotShow: ({ commit }) => commit('homeNotShow'),
}
//获取数据库字段
const getters = {
	back: state => state.showBack,
	home: state => state.showHome
}

export default{
	namespaced: true,		//命名空间
	state,
	mutations,
	actions,
	getters
}
