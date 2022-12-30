import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ROTAS USUARIO
    {
      path: "/",
      name: "home",
      component: () => import("../views/Usuario/HomeView.vue"),
    },
    {
      path: "/events",
      name: "events",
      component: () => import("../views/Usuario/EventsView.vue"),
    },
    {
      path: "/my-events",
      name: "my-events",
      component: () => import("../views/Usuario/MyEventsView.vue"),
    },
    {
      path: "/help",
      name: "help",
      component: () => import("../views/Usuario/HelpView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/Usuario/ProfileView.vue"),
    },
    {
      path: "/all-categories",
      name: "all-categories",
      component: () => import("../views/Usuario/CategoriesView.vue"),
    },
    // ROTAS DASHBOARD
    {
      path: "/admin/dashboard",
      name: "dash-dashboard",
      component: () => import("../views/Admin/DashboardView.vue"),
    },
    {
      path: "/admin/my-events",
      name: "admin-my-events",
      component: () => import("../views/Admin/MyEventsView.vue"),
    },
    {
      path: "/admin/people",
      name: "admin-people",
      component: () => import("../views/Admin/PeopleView.vue"),
    },
    {
      path: "/admin/sales",
      name: "admin-sales",
      component: () => import("../views/Admin/SalesView.vue"),
    },
    {
      path: "/admin/settings",
      name: "admin-settings",
      component: () => import("../views/Admin/SettingsView.vue"),
    },
    {
      path: "/admin/help",
      name: "admin-help",
      component: () => import("../views/Admin/HelpAdminView.vue"),
    },
    // ROTAS EVENTOS
    {
      path: "/admin/events/create-event",
      name: "create-event",
      component: () => import("../views/Event/CreateEventView.vue"),
    },
    {
      path: "/admin/events/dashboard",
      name: "event-dashboard",
      component: () => import("../views/Event/DashboardView.vue"),
    },
    {
      path: "/admin/events/organization",
      name: "event-organization",
      component: () => import("../views/Event/OrganizationView.vue"),
    },
    {
      path: "/admin/events/inscription",
      name: "event-inscription",
      component: () => import("../views/Event/InscriptionView.vue"),
    },
    {
      path: "/admin/events/sales",
      name: "event-sales",
      component: () => import("../views/Event/SalesView.vue"),
    },
    {
      path: "/admin/events/certificates",
      name: "event-certificates",
      component: () => import("../views/Event/CertificatesView.vue"),
    },
    {
      path: "/admin/events/settings",
      name: "event-settings",
      component: () => import("../views/Event/SettingsView.vue"),
    },
    {
      path: "/admin/events/help",
      name: "event-help",
      component: () => import("../views/Event/HelpView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login/LoginView.vue"),
    },
    {
      path: "/admin/login",
      name: "admin-login",
      component: () => import("../views/Login/LoginAdminView.vue"),
    },
    {
      path: "/create-account",
      name: "create-account",
      component: () => import("../views/Login/CreateAccountView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page-not-found",
      component: () => import("../views/NotFound.vue"),
    },
    // teste
  ],
});

export default router;
