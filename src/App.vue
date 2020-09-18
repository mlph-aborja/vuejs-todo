<template>
  <div id="app">
    <h1>Todos</h1>
    <div>
      <router-link to="/">Go to Todos List</router-link> |
      <router-link to="/login">Go to Login</router-link>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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

.error {
  color: red;
}
</style>
