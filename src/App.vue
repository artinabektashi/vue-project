<template>
     <HeaderComp />
  <router-view/>
</template>


<script>
import HeaderComp from './components/HeaderComp.vue';

  export default{
    components: {
      HeaderComp
    },
    mounted(){
      this.$store.dispatch('fetchBooks');
    }
  }
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
