import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component:  () => import("@/modules/Dashboard.vue"),
            // meta: {
            //     tokenRequired: false
            // }
        },
        {
            path: '/login',
            name: 'login',
            component:  () => import("@/modules/Login.vue"),
            // meta: {
            //     tokenRequired: false
            // }
        },
        {
            path: '/register',
            name: 'register',
            component:  () => import("@/modules/Registration.vue"),
        //     meta: {
        //         tokenRequired: false
        //     }
        }
    ]
})
 
