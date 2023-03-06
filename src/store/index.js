import {getDocs, collection} from 'firebase/firestore'
import db from '../firebase/db'
import { createStore } from 'vuex'

const store=createStore({
  state:{
    books:[],
  },
  getters: {
    numberOfBooks(state){
      return state.books.length;
    }
  },
  mutations: {
    setBooks(state, newBooks){
      state.books = newBooks;
    }
  },
  actions: {
    async fetchBooks({commit}){
      const snapshots=await getDocs(collection(db,'books'));
      const newBooks=[];
      snapshots.forEach((snapshot)=>{
        newBooks.push(
          snapshot.data()
        )
      })
      commit('setBooks', newBooks)
    }
  },
  modules: {

  }
})

export default store;