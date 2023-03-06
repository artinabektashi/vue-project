<template>
  <HeaderComp/>
  <router-view/>
</template>


<script>
import {getAuth, onAuthStateChanged } from '@firebase/auth';
import HeaderComp from './components/HeaderComp.vue';

export default {

  components: {
    HeaderComp
  },
  mounted() {
    this.$store.dispatch('fetchBooks');

    const auth = getAuth();
    onAuthStateChanged(auth, (user) =>{
      this.$store.commit('setUser', user);
      
    } )
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
