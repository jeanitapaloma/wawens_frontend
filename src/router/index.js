import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component:  () => import("@/modules/admin/Dashboard.vue"),
        },
        {
            path: '/login',
            name: 'login',
            component:  () => import("@/modules/basic/Login.vue"),
        },
        {
            path: '/register',
            name: 'register',
            component:  () => import("@/modules/basic/Registration.vue"),
        },
        {
            path: '/faq',
            name: 'faq',
            component:  () => import("@/modules/others/FAQs.vue"),
        },
        {
            path: '/product',
            name: 'product',
            component:  () => import("@/modules/product/Product.vue"),
        },
        {   path: '/profile',
            name: 'profile',
            component:  () => import("@/modules/basic/Profile.vue"),
        },

    ]
})
