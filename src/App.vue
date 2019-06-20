<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <img src="./assets/demo.png" alt="" class="demo">
    <span class="sp">11111</span>
    <p class="en">666</p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  mounted() {
   
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  img {
    width: 100px;
  }
  .demo {
    width: 733px;
    height: 168px;
    margin: auto;
  }
  .sp {
    border: 1px solid #fff;
  }
  .en {
    width: 50px;
  }
}
</style>
