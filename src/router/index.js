import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component:  () => import("@/modules/Dashboard.vue"),
        },
        {
            path: '/login',
            name: 'login',
            component:  () => import("@/modules/Login.vue"),
        },
        {
            path: '/register',
            name: 'register',
            component:  () => import("@/modules/Registration.vue"),
        },
        {
            path: '/faq',
            name: 'faq',
            component:  () => import("@/modules/FAQs.vue"),
        },
    ]
})