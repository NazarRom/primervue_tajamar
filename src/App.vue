<template>
<div>
  <MenuComponent/>
  <!--esatico-->
  <h1>Element estatico</h1>
  <!--dnamico-->
  <router-view></router-view>
  
  <!-- <HolaMundo/>
  <HomeComponent/> -->
  <!-- <MusicaComponent/> -->
  <!-- <CineComponent/> -->
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HolaMundo from './components/HolaMundo.vue'
// import MusicaComponent from './components/MusicaComponent.vue'
// import CineComponent from './components/CineComponent.vue'
// import HomeComponent from './components/HomeComponent.vue'
import MenuComponent from './components/MenuComponente.vue';
export default {
  name: 'App',
  components: {
    MenuComponent
  //   HelloWorld,
  //   HolaMundo,MusicaComponent,CineComponent,HomeComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
