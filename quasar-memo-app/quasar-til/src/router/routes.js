const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: "login" },
      { path: "login", component: () => import("pages/LoginPage.vue") },
      { path: "signup", component: () => import("pages/SignupPage.vue") },
      {
        path: "main",
        component: () => import("pages/MainPage.vue"),
        meta: {
          auth: true,
        },
      },
      {
        path: "button",
        component: () => import("pages/drawer/ButtonPage.vue"),
      },
      {
        path: "carousel",
        component: () => import("pages/drawer/CarouselPage.vue"),
      },
      {
        path: "/add",
        component: () => import("pages/PostAddPage.vue"),
        meta: {
          auth: true,
        },
      },
      {
        path: "/post/:id",
        component: () => import("pages/PostEditPage.vue"),
        meta: {
          auth: true,
        },
      },
      {
        path: "/color-settings",
        component: () => import("pages/ColorSettingPage.vue"),
        meta: {
          auth: true,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
