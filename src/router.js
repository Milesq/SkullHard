import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home')
    },
    {
      path: '/rankings',
      name: 'rankings',
      component: () => import('./views/Rankings')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('./views/Shop')
    },
    {
      path: '/plan',
      name: 'editingPlan',
      component: () => import('./views/EditingPlan')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('./views/Events')
    },
    {
      path: '/films',
      name: 'films',
      component: () => import('./views/Films')
    },
    {
      path: '/regulations',
      name: 'regulations',
      component: () => import('./views/Regulations')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact')
    },
    {
      path: '/sectors',
      name: 'sectors',
      component: () => import('./views/Sectors')
    },
    {
      path: '/bans',
      name: 'bans',
      component: () => import('./views/Bans')
    },
    {
      path: '/changes',
      name: 'changeLog',
      component: () => import('./views/ChangeLog')
    }
  ]
})
