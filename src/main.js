import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faFacebook)
Vue.use(BootstrapVue)
Vue.use(VueSidebarMenu)
Vue.use(IconsPlugin)
Vue.config.productionTip = false;
Vue.config.productionTip = false

new Vue({
  router:router,
  template: '<router-view></router-view>',
  render: h => h(App)
}).$mount('#app')
