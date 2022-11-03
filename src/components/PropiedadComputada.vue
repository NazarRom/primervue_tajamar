<template>
  <div>
    <h1>Conmutada</h1>
    <ul>
        <li v-for="game in juegosRojos" :key="game" v-html="game">
            
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PropiedadComputada",
  computed:{
//una propiedad conmutada siempre devueleve valores y no puede recibir parametros
juegosRojos(){
    var datos = this.juegos;
    //recorremos los juegos y los devolvemos en color rojo
    for(var i = 0;i<datos.length;i++){
        var juego = datos[i];
        juego = "<span style='color:red'>"+ juego +"</span>";
        datos[i] = juego;

    }
    return datos;
}
  },
  data(){
    return{
        juegos:["Parchis","Luz roja, luz verde","La cuerda","La galleta","Canicas"]
    }
  }
};
</script>

<style>
</style>