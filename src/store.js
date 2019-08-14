import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userName: ''
	},
	mutations: {
		userLogin(state, payload) {
			state.userName = payload.userName
		}
	},
	actions: {

	}
})
