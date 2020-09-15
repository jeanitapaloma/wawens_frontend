export default {
    routes: [
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['modules/Login.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        }
    ]
}