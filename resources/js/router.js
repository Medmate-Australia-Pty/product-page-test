import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '/',
    //   redirect: () => ({ name: 'product', params: { slug: 'fall-limited-edition-sneakers' } })
    // },
    {
      path: '/shop/product/:slug',
      name: 'product',
      component: () => import('./views/Product.vue'),
    },
    {
      path: '/shop/product/product-not-found',
      name: 'ProductNotFound',
      component: () => import('./views/ProductNotFound.vue')
    }
  ],
})

export default router;