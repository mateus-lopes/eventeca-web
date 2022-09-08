import { createRouter, createWebHistory } from 'vue-router'

function lazyload(view){
  return import(`../views/${view}.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyload('HomePage')
    },
    {
      path: '/search-events',
      name: 'events',
      component: lazyload('SearchEvents')
    },
    {
      path: '/my-events',
      name: 'my-events',
      component: lazyload('MyEvents')
    },
    {
      path: '/help-center',
      name: 'help',
      component: lazyload('HelpCenter')
    }
  ]
})

export default router;