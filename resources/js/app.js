require('./bootstrap')

import { createApp } from 'vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp({})

app.use(router)

app.mount('#app')