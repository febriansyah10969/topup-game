import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "topup",
    component: () => import("@/view/layout/LayoutMaster.vue"),
    children: [
      {
        path: "/",
        name: "topup",
        meta: { asideEnabled: true, asidePrimaryDisabled: true },
        component: () => import("@/view/pages/HomePage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
