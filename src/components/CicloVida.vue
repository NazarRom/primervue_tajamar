<template>
  <div>
    <h1>Hooks VUE</h1>
    <button @click="cambiarSaludo()">Mostrar saludo</button>
    <h2>
      {{ saludo }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "CicloVida",
  data() {
    return {
      saludo: "Hola es juernes",
    };
  },
  methods: {
    //aqui incluimos nuestros metodos personalizados
    cambiarSaludo() {
      //toda variables o metodo debemos llamarlo con this
      this.saludo = "Y mañana viernes!!!";
    },
  },//estos hooks van fuera del method
    mounted() {
      console.log("Componenete montado");
    },
    created() {
      console.log("Componenete creado");
    },
    unmonted() {
      console.log("Componente destruido");
    },
    updated() {
      console.log("Componente modificado");
    }
  }

</script>

<style>
</style>