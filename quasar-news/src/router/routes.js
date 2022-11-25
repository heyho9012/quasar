const routes = [
  {
    path: "/",
    redirect: "/news",
  },
  {
    path: "/news",
    component: () => import("../pages/NewsView.vue"),
  },
  {
    path: "/ask",
    component: () => import("pages/AskView.vue"),
  },
  {
    path: "/jobs",
    component: () => import("pages/JobsView.vue"),
  },
  {
    path: "/user/:id",
    component: () => import("pages/UserView.vue"),
  },
  {
    path: "/item/:id",
    component: () => import("pages/ItemView.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
