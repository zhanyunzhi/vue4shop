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
	modules: {
		header,
		footer
	}
})
