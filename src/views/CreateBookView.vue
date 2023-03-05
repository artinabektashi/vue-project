<template>
    <h2>Create a new book</h2>
    <form v-on:submit.prevent="handleCreateBooks">
        <label>
            Title  
            <input 
            v-bind:value="newBook.title" 
            v-on:input="newBook.title = $event.target.value"/>
        </label>
        <label>
            Description
            <textarea v-model="newBook.description">
            </textarea>
        </label>
        <label>
            Author
            <input v-model="newBook.author"/>
        </label>
        <button>Publish Book</button>
    </form>
</template>

<script>
import db from '../firebase/db';
import {doc, setDoc} from 'firebase/firestore';

    export default{
        data(){
            return{
                newBook : {
                    title: '',
                    description : '',
                    author:''
                },
            }
        },
        methods:{
            async handleCreateBooks() {
                if(!this.newBook.title.trim() || !this.newBook.description.trim() || !this.newBook.author.trim()) return;

                try{
                   const result= await setDoc(doc(db,"books","2"),{
                ...this.newBook})
             console.log(result)
                }catch(err){
                    console.log(err)
                }
             this.newBook.title='';
             this.newBook.author='';
             this.newBook.description = '';
            }
        }
    }
</script>

<style>
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap : 1rem;
    }
</style>