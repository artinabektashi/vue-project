<script>
export default {
    data() {
        return {
            newCategory: {
                title: '',
                description: ''
            },
            allCategories: this.$store.state.categories,
        }
    },
    methods: {
        async handleCreateCategory() {
            this.$store.dispatch('createCategory', { ...this.newCategory })
            this.newCategory.title = '';
            this.newCategory.description = '';
        }
    }
}
</script>

<template>
    <div v-for="cat in allCategories" :key="cat.id"> {{ cat.title }}</div>

    <form @submit.prevent="handleCreateCategory">
        <div class="from-group">
            <label for="name" >Name:</label>
            <input id="name" v-model="newCategory.title"  />
        </div>
        <div class="from-group">
            <label for="description" >Description:</label>
            <input id="description" v-model="newCategory.description"  />
        </div>
        <button>Create</button>
    </form>
</template>
