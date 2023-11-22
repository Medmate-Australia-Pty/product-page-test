require('./bootstrap')

import { createApp } from 'vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import store from './store'

const app = createApp({}).use(router).use(store).mount('#app')