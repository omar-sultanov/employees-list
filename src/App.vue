<template>
  <Home />
</template>

<script>
import Home from './pages/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },

};
</script>

<style>
#app {
  font-family: 'Geologica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
