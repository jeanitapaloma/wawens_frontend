import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/dashboard',
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
        {
            path: '/partner',
            name: 'partner',
            component:  () => import("@/modules/others/Partner.vue"),
        },
        {
            path: '/testimonial',
            name: 'testimonial',
            component:  () => import("@/modules/others/Testimonial.vue"),
        },
        {
            path: '/story',
            name: 'story',
            component:  () => import("@/modules/others/Story.vue"),
        },
        {
            path: '/header1',
            name: 'header1',
            component:  () => import("@/components/frame/Header1.vue"),
        },
        {
            path: '/submit_order',
            name: 'submit_order',
            component:  () => import("@/modules/product/SubmitOrder.vue"),
        },
        {
            path: '/cart',
            name: 'cart',
            component:  () => import("@/modules/product/Cart.vue"),
        },
        {
            path: '/order_status',
            name: 'order_status',
            component:  () => import("@/modules/product/OrderStatus.vue"),
        },

    ]
})
