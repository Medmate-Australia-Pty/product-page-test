require('./bootstrap')

import { createApp } from 'vue'
import router from './router'

import VueSvgInlinePlugin from 'vue-svg-inline-plugin'

const app = createApp({})

app.use(router)

app.use(VueSvgInlinePlugin, {
  attributes: {
    data: [ "src" ],
    remove: [ "alt" ]
  }
});

app.mount('#app')