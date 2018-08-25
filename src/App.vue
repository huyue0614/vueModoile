<template>
  <div id="app">
    <router-view/>
    <app-tabs></app-tabs>
  </div>
</template>

<script>
import AppTabs from './components/AppTabs'
export default {
  components: {
    AppTabs
  }
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
</style>
