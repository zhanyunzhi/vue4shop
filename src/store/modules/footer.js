/**
 * vuex store
 * @authors Your Name (you@example.org)
 * @date    2018-05-02 11:27:45
 * @version $Id$
 */


const state = {
	showBack: true,
	showHome: true
}

const mutations = {
	backShow(state) {
		state.showBack = true;
	},
	homeShow(state) {
		state.showHome = true;
	},
	backNotShow(state) {
		state.showBack = true;
	},
	homeNotShow(state) {
		state.showHome = true;
	}
}

const actions = {
	backShow: ({ commit }) => commit('backShow'),
	homeShow: ({ commit }) => commit('homeShow'),
	backNotShow: ({ commit }) => commit('backNotShow'),
	homeNotShow: ({ commit }) => commit('homeNotShow'),
}

const getters = {
	back: state => state.showBack,
	home: state => state.showHome
}

export default{
	namespaced: true,			//命名空间
	state,
	mutations,
	actions,
	getters
}
