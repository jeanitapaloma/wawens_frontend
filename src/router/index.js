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
            path: '/orders',
            name: 'orders',
            component:  () => import("@/modules/admin/Orders.vue"),
        },
        {
            path: '/accounts',
            name: 'accounts',
            component:  () => import("@/modules/admin/Accounts.vue"),
        },
        {
            path: '/customers',
            name: 'customers',
            component:  () => import("@/modules/admin/Customers.vue"),
        },
        {   path: '/others',
            name: 'others',
            component:  () => import("@/modules/admin/Others.vue"),
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
        {
            path:'/admin_product',
            name:'admin_product',
            component: () => import("@/modules/admin/AdminProduct.vue"),
        },
        {
            path:'/add_product',
            name:'add_product',
            component: () => import("@/modules/basic/addProduct_Modal.vue"),
        },
        {
            path:'/update_product',
            name:'update_product',
            component: () => import("@/modules/basic/UpdateProduct_Modal.vue"),
        },
        {
            path:'/account_info',
            name:'account_info',
            component: () => import("@/modules/basic/AccountInfo_Modal.vue"),
        }

    ],
    mode: 'history'
})

