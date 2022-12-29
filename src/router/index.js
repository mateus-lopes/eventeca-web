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
      name: 'dash-dashboard',
      component: () => import('../views/Admin/DashboardView.vue')
    },
    {
      path: '/admin/organization',
      name: 'dash-organization',
      component: () => import('../views/Admin/OrganizationView.vue')
    },
    {
      path: '/admin/inscription',
      name: 'dash-inscription',
      component: () => import('../views/Admin/InscriptionView.vue')
    },
    {
      path: '/admin/sales',
      name: 'dash-sales',
      component: () => import('../views/Admin/SalesView.vue')
    },
    {
      path: '/admin/certificates',
      name: 'dash-certificates',
      component: () => import('../views/Admin/CertificatesView.vue')
    },
    {
      path: '/admin/settings',
      name: 'dash-settings',
      component: () => import('../views/Admin/SettingsView.vue')
    },
    {
      path: '/admin/help',
      name: 'dash-help',
      component: () => import('../views/Admin/HelpView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/LoginView.vue')
    },
    {
      path: '/admin/login',
      name: 'dash-login',
      component: () => import('../views/Login/LoginAdminView.vue')
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
