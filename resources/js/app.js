require('./bootstrap')

import { createApp } from 'vue'
import router from './router'
import ProductPage from './components/ProductPage.vue';

const app = createApp({})

app.use(router)

app.component('product-page', ProductPage);

app.mount('#app')