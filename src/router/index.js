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
      path: '/admin/dashboard',
      name: 'dashboard',
      component: () => import('../views/Admin/DashboardView.vue')
    },
    {
      path: '/admin/organization',
      name: 'organization',
      component: () => import('../views/Admin/OrganizationView.vue')
    },
    {
      path: '/admin/inscription',
      name: 'inscription',
      component: () => import('../views/Admin/InscriptionView.vue')
    },
    {
      path: '/admin/sales',
      name: 'sales',
      component: () => import('../views/Admin/SalesView.vue')
    },
    {
      path: '/admin/cetificates',
      name: 'cetificates',
      component: () => import('../views/Admin/CertificatesView.vue')
    },
    {
      path: '/admin/settings',
      name: 'settings',
      component: () => import('../views/Admin/SettingsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/LoginView.vue')
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: () => import('../views/Login/CreateAccountView.vue')
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'page-not-found',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
