import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import CicloVida from "./components/CicloVida.vue";
import DirectivasComponent from "./components/DirectivasComponent.vue";
import PropiedadComputada from "./components/PropiedadComputada.vue";
import MetodosFilter from "./components/MetodosFilter.vue";
const misRutas = [
    {
        path:"/", component: HomeComponent
    },
    {
        path:"/musica", component: MusicaComponent
    },
    {
        path:"/cine", component: CineComponent
    },
    {
        path:"/hooks",component: CicloVida
    },
    {
        path:"/directivas",component: DirectivasComponent
    },
    {
        path:"/conmutada",component: PropiedadComputada
    },
    {
        path:"/filter", component:MetodosFilter
    }
    
]

//creamos una constante que contendrá las rutas y el historial
//dicha constante sera la que utilizaremos dento de main.js

const router = createRouter({
history:createWebHistory(),
routes: misRutas
});

//por ultimo, exporta
export default router;