<template>
  <HeaderComp/>
  <router-view/>
</template>


<script>
import HeaderComp from './components/HeaderComp.vue';

export default {

  components: {
    HeaderComp
  },
  mounted() {
    this.$store.dispatch('fetchBooks');
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: sans-serif;
  color: #333;
  box-sizing: border-box;
}

header {
  padding: 3.5rem;
}
</style>
