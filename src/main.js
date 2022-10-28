import { createApp } from 'vue'
import App from './App.vue'
//importamos la constante de router.js
import router from './Router'

createApp(App).use(router).mount('#app')
