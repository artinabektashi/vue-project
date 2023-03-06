<template>
  <main>
    <section>
      <h3>Books</h3>
      <article v-for="book in books"
      v-bind:key="book.title">
        <h4>{{ book.title }}</h4>
        <p>{{ book.description }}</p>
        <h3>{{ book.author }}</h3>
      </article>
    </section>
  </main>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'HomeView',
  computed:{
    ...mapState(['books'])
  }
}
</script>
