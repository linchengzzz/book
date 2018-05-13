import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import collect from '../components/collect.vue'
import car from '../components/car.vue'
import manage from '../components/manage/manage.vue'
import homeCom from '../components/home/homeCom.vue'
import homeList from '../components/home/homeList.vue'
import detail from '../components/detail.vue'
import manageCheck from '../components/manage/manageCheck.vue';
import manageAdd from '../components/manage/manageAdd.vue';
import manageUpdate from '../components/manage/manageUpdate.vue';
import manageDelete from '../components/manage/manageDelete.vue';
Vue.use(Router)

const router = new Router({
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
        component: manage,
        children: [{
            path: '/manage/check',
            name: 'manageCheck',
            component: manageCheck
        }, {
            path: '/manage/add',
            name: 'manageAdd',
            component: manageAdd
        },{
            path:'/manage/update',
            name:'manageUpdate',
            component:manageUpdate
        },{
            path:'/manage/delete',
            name:'manageDelete',
            component:manageDelete
        }]
    }, {
        path: '/detail',
        name: 'detail',
        component: detail
    }, {
        path: "*",
        redirect: "/home/com/sold"
    }]
})

export default router;