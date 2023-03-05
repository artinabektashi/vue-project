<template>
  <HeaderComp />
</template>

<script>

import HeaderComp from './components/HeaderComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}
html{
  font-size: 62.5%;
}

body{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  box-sizing: border-box;
  font-size: 1.6rem;
}
</style>
