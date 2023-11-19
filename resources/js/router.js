import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: () => ({ name: 'product', params: { slug: 'fall-limited-edition-sneakers' } })
    },
    {
      path: '/shop/product/:slug',
      name: 'product',
      component: () => import('./views/Product.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: require('./views/404.vue').default,
      meta: {
        title: 'Whoops!',
        showRoute: 'Not Found'
      }
    }
  ],
})

export default router;