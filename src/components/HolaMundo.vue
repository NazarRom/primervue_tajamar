<template>
    <div>
        <h1>Mi primer componente VUE!!</h1>
        <h2>Su nombre es: {{nombre}}</h2>
    </div>
</template>

<script>
//siempre debemos exportar el nombre del componente
//en el script
export default{
    name:"HolaMundo",
    data(){
        //aqui dentor devolvemos las variables a utilizar
        //en el componente
        return {
            nombre: "Alumno",
            numero:14,
            miArray : []
        }
    }
}
</script>

<style scoped>
h1 {color:blue}
@import './../assets/css/estilosvue.css';
</style>