<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>    <!-- 可以同时定义多个router-view -->
  </div>
</template>

<script>
//import sass from './assets/sass.scss';
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
