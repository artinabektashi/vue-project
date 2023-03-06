<script>
    export default{
        methods:{
            async handleLoginUser() {
                this.$store.dispatch('loginUser', {
                    email: this.email, 
                    password: this.password
                });

            }
        },
        data(){
            return{
                email: '',
                password:''
            }
        }
    }
</script>

<template>
    <h1>Login View</h1>

    <form @submit.prevent="handleLoginUser">
        <div class="form-group">
            <label for="email">Email:</label>
            <input id="email" type="email" required v-model="email">

        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" required v-model="password">
        </div>

        <div class="controlls">
            <button>Login</button>
        </div>
    </form>
</template>