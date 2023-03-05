<template>
    <h2>Create a new book</h2>
    <form>
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
    export default{
        data(){
            return{
                newBook : {
                    title: 'Book1',
                    description : '',
                    author:''
                },
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