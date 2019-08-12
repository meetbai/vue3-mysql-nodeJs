import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Welcome from './views/Welcome.vue'
// info
import InfoAdd from './views/info/InfoAdd.vue'
import InfoList from './views/info/InfoList.vue'
import InfoEdit from './views/info/InfoEdit.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'login',
			component: Login
		},
		{
			path: '/home',
			component: Home,
			children:[
				{
					path:'/',
					name:'welcome',
					component:Welcome
				},
				{
					path:'/infoAdd',
					naem:'infoAdd',
					component:InfoAdd
				},
				{
					path:'/infoList',
					naem:'infoList',
					component:InfoList
				},
				{
					path:'/infoEdit',
					naem:'infoEdit',
					component:InfoEdit
				}
			]
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: function() {
				return import( /* webpackChunkName: "about" */ './views/About.vue')
			}
		},
		{
			path:'*',
			name:'',
			component:Login
		}
	]
})
