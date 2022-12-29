import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Usuario/HomeView.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/Usuario/EventsView.vue')
    },
    {
      path: '/my-events',
      name: 'my-events',
      component: () => import('../views/Usuario/MyEventsView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/Usuario/HelpView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Usuario/ProfileView.vue')
    },
    {
      path: '/all-categories',
      name: 'all-categories',
      component: () => import('../views/Usuario/CategoriesView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin/AdminView.vue')
    },
  ]
})

export default router
