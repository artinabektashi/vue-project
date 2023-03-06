import {getDocs, collection} from 'firebase/firestore'
import db from '../firebase/db'
import { createStore } from 'vuex'
import signupUser from '@/firebase/user/signupUser';

const store=createStore({
  state:{
    books:[],
    user: null,
  },
  getters: {
    numberOfBooks(state){
      return state.books.length;
    }
  },
  mutations: {
    setBooks(state, newBooks){
      state.books = newBooks;
    },
    setUser(state, user){
      state.user= user;
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
    },
   // loginUser({ commit }) {},
    async registerUser(_, payload) {
      await signupUser(payload);
    }
  },
  modules: {

  }
})

export default store;