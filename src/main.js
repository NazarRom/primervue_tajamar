import { createApp } from 'vue'
import App from './App.vue'
//importamos la constante de router.js
import router from './Router'

const app = createApp(App)
//debemos incluir los metodos filters como globales
//para la aplicacion
app.config.globalProperties.$filters = {
    //aqui los metodos/filters globales para la app
    mayusculas(dato) {
        return dato.toUpperCase();
      },
      getNumberDouble(numero){
        return numero * 2
      }
}
app.use(router).mount('#app')
