<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view/>    <!-- 可以同时定义多个router-view -->
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'   //引入页面组件，命名为HeaderNav
export default {
  name: 'App',
  components: {
    HeaderNav
  }
}
</script>

<style lang="scss">
@import '../src/assets/css/global.css'; /*引入公共样式*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
  padding-top: .9rem;
  padding-bottom: 1.5rem;
  @include setMnWidth();
  margin: 0 auto;
}
html{
    -webkit-text-size-adjust:none;
    font-family:  "PingFang-SC-Medium","Helvetica Neue", Helvetica, Tahoma, sans-serif;
}
body,h1, h2, h3, h4, h5, h6,p{
  margin:0;
  color:$black;
  font-size:0.28rem;
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
hr{
  border: none;
  border-top: .2rem solid $borderColor;
  margin: 0;
}
.clear-fix{
  @include clearfix;
}
</style>
