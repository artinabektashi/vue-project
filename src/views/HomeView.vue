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
import {collection, getDocs} from 'firebase/firestore'
import db from '@/firebase/db'

export default {
  name: 'HomeView',
  data(){
    return{
      books: [],
    }
  },
  methods:{
    async fetchBooks(){
      const snapshots = await  getDocs(collection(db, 'books'))
      const newBooks = [] 
      snapshots.forEach((snapshot) =>{
        newBooks.push(snapshot.data());
        
      })

      this.books= newBooks;
    }
  },
  mounted(){
    this.fetchBooks()
  }
}
</script>
