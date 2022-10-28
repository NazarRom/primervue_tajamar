import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";


const misRutas = [
    {
        path:"/", component: HomeComponent
    },
    {
        path:"/musica", component: MusicaComponent
    },
    {
        path:"/cine", component: CineComponent
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