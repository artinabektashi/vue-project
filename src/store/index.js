import {getDocs, collection} from 'firebase/firestore'
import db from '../firebase/db'
import { createStore } from 'vuex'
import signupUser from '@/firebase/user/signupUser';
import loginUser from '../firebase/user/loginUser';

const store=createStore({
  state:{
    books:[],
    user: null,
    categories : []
  },
  getters: {
    numberOfBooks(state){
      return state.books.length;
    },
    titleOfBooks(state){
      return state.books.map((book) => book.title);
    },
    userUid(state){
      if(!state.user) return null;
      return state.user.uid;
    },
    userEmail(state){
      if (!state.user) return '';
      return state.user.email
    }
  },
  mutations: {
    setBooks(state, newBooks){
      state.books = newBooks;
    },
    setUser(state, user){
      state.user= user;
    },
    setCategories(state, categories) {
      state.categories = categories;
  },
  addCategory(state, category) {
      state.categories.push(category);
  },
  },
  actions: {
    
    async loginUser({ commit }, payload) {
      const {user} = await loginUser(payload);
      commit('setUser', user);
     },
     async registerUser(_, payload) {
       await signupUser(payload);
     },
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
    async fetchCategories({ commit }) {
      const res = await fetch('http://localhost:3000/categories');
      const categories = await res.json();
      commit('setCategories', categories)
     },
     async createCategory({ commit }, categoryData) {
      const res = await fetch('http://localhost:3000/categories',
              {
                  method: 'post',
                  body: JSON.stringify(categoryData),
                  headers: {
                      'Content-Type': 'application/json'
                  }

              }
          )

      const newCategory = await res.json();

      commit('addCategory', newCategory);
     },
  },
  modules: {

  }
})

export default store;