import Vue from 'vue'
import Router from 'vue-router'
import AppBalance from '@/components/AppBalance'
import AppHome from '@/components/AppHome'
import AppAngel from '@/components/AppAngel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/appBalance',
      name: 'AppBalance',
      component: AppBalance
    },
    {
      path: '/appAngel',
      name: 'AppAngel',
      component: AppAngel
    }
  ]
})
