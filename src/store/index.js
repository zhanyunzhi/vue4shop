/**
 * vuex store
 * @authors Your Name (you@example.org)
 * @date    2018-05-02 11:27:45
 * @version $Id$
 */
import Vue from 'vue'
import Vuex from 'vuex'

import header from './modules/header'
import footer from './modules/footer'

Vue.use(Vuex);

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',		//在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。
	modules: {
		header,
		footer
	}
})
