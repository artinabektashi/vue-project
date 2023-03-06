<script>
import { mapGetters } from 'vuex';

export default{
    data(){
        return{
            name:'',
            description : ''
        }
    },
    computed :{
        ...mapGetters(['userUid'])
    },
    methods:{
        async handleCreateCategory(){
            const payload = { 
                name: this.name , 
                description: this.description,
                creatorId: this.userUid,
            };
            const result = await fetch('http://localhost:3000/category/create',{
                method: 'post',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(payload),
            })

            const newCategory = await result.json();
            console.log(newCategory)
        }
    }
}
</script>


<template>
    <h2>Create category</h2>
    <section>
        <form @submit.prevent="handleCreateCategory">
            <div class="control-group">
                <label for="name">Name</label>
                <input id="name" v-model="name"/>
            </div>
            <div class="control-group">
                <label for="description">Description</label>
                <textarea id="description" v-model="description"></textarea>
            </div>
            <div class="controls">
                <button>Create category</button>
            </div>
        </form>
    </section>
</template>