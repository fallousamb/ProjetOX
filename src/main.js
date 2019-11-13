// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./components/Accueil.vue').default,
    name: 'root'
  }, {
    path: '/recherche',
    component: require('./components/Recherche.vue').default,
    name: 'recherche'
  }]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
