import { createApp } from 'vue'
import App from './App.vue'

import router from './plugins/router'
import store, { key } from './plugins/vuex'

import 'virtual:windi.css'

createApp(App).use(router).use(store, key).mount('#app')
