import { createApp } from 'vue'
import App from './App.vue'

import router from './plugins/router'

import 'virtual:windi.css'

createApp(App).use(router).mount('#app')
