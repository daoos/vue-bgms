import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/login/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
