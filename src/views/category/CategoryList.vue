<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['categories'])
    },
    methods: {
        handleDeleteCategory(categoryId) {
            this.$store.dispatch('deleteCategory', categoryId)
        }
    },
    mounted() {
        this.$store.dispatch('fetchCategories');
    }
}
</script>

<template>
<h2>Cat list</h2>
<div v-for="category in this.categories" :key="category._id">
    <h3>{{ category.title }}</h3>

    <p>{{ category.description }}</p>

    
</div>
</template>