require('./bootstrap')

import { createApp } from 'vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import store from './store/index'
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp({})
    .use(router)
    .use(store)
    .use(Vue3Toasity,
        {
          autoClose: 3000,
        },)
    .mount('#app')