<template>
  <div>
    <h1>Filter</h1>
    <ul>
      <li v-for="name in nombres" :key="name" >
    {{$filters.mayusculas(name)}}
      </li>
    </ul>
    <ul>
        <li v-for="numero in numeros" :key="numero">
            {{$filters.getNumberDouble(numero)}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MetodosFilter",
  data() {
    return {
      nombres: ["Adrian", "Diana", "Lucia", "Marcos", "Carlos"],
      numeros:[2,5,8,6,7,56]
    };
  },
};
</script>

<style>
</style>