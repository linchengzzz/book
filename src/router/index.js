import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import collect from '../components/collect.vue'
import car from '../components/car.vue'
import manage from '../components/manage.vue'

Vue.use(Router)

export default new Router({
    routes: [{
		path:'/home',
		name:'home',
		component:home
    },{
		path:'/collect',
		name:'collect',
		component:collect
	},{
		path:'/car',
		name:'car',
		component:car
	},{
		path:'/manage',
		name:'manage',
		component:manage
	}]
})
