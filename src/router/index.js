import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import collect from '../components/collect.vue'
import car from '../components/car.vue'
import manage from '../components/manage.vue'
import homeCom from '../components/home/homeCom.vue'
import homeList from '../components/home/homeList.vue'
import detail from '../components/detail.vue'
Vue.use(Router)

export default new Router({
    routes: [{
        path: "/",
        redirect: "/home/com/sold"
    }, {
        path: '/home',
        name: 'home',
        component: home,
        children: [{
            props: true,
            path: '/home/com/:index',
            name: 'com',
            component: homeCom
        }, {
            props: true,
            path: '/home/list/:index',
            name: 'list',
            component: homeList
        }]
    }, {
        path: '/collect',
        name: 'collect',
        component: collect
    }, {
        path: '/car',
        name: 'car',
        component: car
    }, {
        path: '/manage',
        name: 'manage',
        component: manage
    }, {
        path: '/detail',
        name: 'detail',
        component: detail
    }]
})
