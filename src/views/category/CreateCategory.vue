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
        handleCreateCategory(){
            const payload = { 
                name: this.name , 
                description: this.description,
                creatorId: this.userUid,
            };
            console.log('payloag', payload)
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