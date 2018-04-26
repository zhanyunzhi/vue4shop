<template>
  <div id="app">
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
}
html{
    -webkit-text-size-adjust:none;
    font-family:  "PingFang-SC-Medium","Helvetica Neue", Helvetica, Tahoma, sans-serif !default;
}
body,h1, h2, h3, h4, h5, h6,p{
  margin:0;
  color:#000000;
  font-size:0.28rem;
  line-height: 1;
}
ul, li{
  margin: 0;
  padding: 0;
  list-style:none;
}
a{
  text-decoration:none;
  color:inherit;
}
input[type="submit"],input[type="reset"],input[type="button"],button{
  -webkit-appearance:none;  /*Remove the apple the default UI to render button*/
}
textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"] {
  vertical-align: baseline;
  height:auto;
  line-height:1;
}
</style>
