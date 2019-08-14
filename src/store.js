import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userName: ''
	},
	mutations: {
		// 通过commit 提交状态变化 
		userLogin(state, payload) {
			state.userName = payload.userName
		}
	},
	actions: {

	}
})
