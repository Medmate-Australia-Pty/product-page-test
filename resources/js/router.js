import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: () => ({
                name: "product",
                params: { slug: "fall-limited-edition-sneakers" },
            }),
        },
        {
            path: "/shop/product/:slug",
            name: "product",
            component: () => import("./views/Product.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "404page",
            component: () => import("./views/404page.vue"),
        },
    ],
});

export default router;
