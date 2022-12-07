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
        path: "color-settings",
        component: () => import("pages/ColorSettingPage.vue"),
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
        path: "chip",
        component: () => import("pages/drawer/ChipCircularProgressPage.vue"),
      },
      {
        path: "dialog",
        component: () => import("pages/drawer/DialogPage.vue"),
      },
      {
        path: "expansionitem",
        component: () => import("pages/drawer/ExpansionItemPage.vue"),
      },
      {
        path: "select",
        component: () => import("pages/drawer/SelectPage.vue"),
      },
      {
        path: "radio",
        component: () => import("src/pages/drawer/RadioPage.vue"),
      },
      {
        path: "checkbox",
        component: () => import("src/pages/drawer/CheckboxPage.vue"),
      },
      {
        path: "time-picker",
        component: () => import("src/pages/drawer/TimePickerPage.vue"),
      },
      {
        path: "date-picker",
        component: () => import("src/pages/drawer/DatePickerPage.vue"),
      },
      {
        path: "infinite-scroll",
        component: () => import("src/pages/drawer/InfiniteScrollPage.vue"),
      },
      {
        path: "intersection",
        component: () => import("src/pages/drawer/IntersectionPage.vue"),
      },
      {
        path: "slider",
        component: () => import("src/pages/drawer/SliderPage.vue"),
      },
      {
        path: "menu",
        component: () => import("src/pages/drawer/MenuPage.vue"),
      },
      {
        path: "parallax",
        component: () => import("src/pages/drawer/ParallaxPage.vue"),
      },
      {
        path: "stepper",
        component: () => import("src/pages/drawer/StepperPage.vue"),
      },
      {
        path: "table",
        component: () => import("src/pages/drawer/TablePage.vue"),
      },
      {
        path: "skeleton",
        component: () => import("src/pages/drawer/SkeletonPage.vue"),
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
