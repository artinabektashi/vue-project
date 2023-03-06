<template>
    <header class="head">
        <img class="head__logo" src="../assets/logo.png" />
        <ul class="nav-list">
            <li v-for="item in menuItems" v-bind:key="item.path"><router-link v-bind:to="item.path">{{ item.name
            }}</router-link></li>
        </ul>
        <!-- <p>Currently there are {{ $store.getters.numberOfBooks }} books</p> -->
        <p>Currently there are {{ numberOfBooks }} books</p>
        <div v-if="user" class="controls">
            <div>Welcome {{ userEmail }}!</div>  
            <button @click="handleLogout">Logout</button>
        </div>
        <div v-else class="controls">
            <router-link :to="{ name: 'login'}">Login</router-link>
            <router-link to="/register">Register</router-link>
        </div>
    </header>
</template>

<script>
import { getAuth, signOut } from '@firebase/auth';
import { mapGetters , mapState} from 'vuex';
export default {
   
    data() {
        return {
            title: 'E-Library',
            menuItems: [
                { path: '/', name: 'Home' },
                { path: '/about', name: 'About us' },
                { path: '/contact', name: 'Contact us' },
                { path: '/books', name: 'Books' },
                { path: '/create', name: "Manage Books" },
                
            ]
        }
    },
    methods:{
        handleLogout(){
            signOut(getAuth());
        }
    },
    computed: {
        ...mapGetters(['numberOfBooks' ,'userEmail']),
  
        ...mapState(['user'])
    
    }
}
</script>

<style>
.head {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    background-color: rgb(241, 231, 225);
    padding: 10px;
}


.head__logo {
    max-width: 50px;
    margin-left: 1rem;
}

.nav-list {
    list-style-type: none;
    display: flex;
    gap: 3rem;
    
}

.nav-list a {
    transition: all .2 ease-out;
    
}

.nav-list a:hover {
    color: rgba(203, 139, 139, 0.7);
    background-color: rgb(233, 222, 216);
    padding: 23px;
}

a:link,
a:visited {
    text-decoration: none;
    font-size: 1.9rem;
    color: #2c3e50;
    font-weight: 500;
}
.controls {
        display: flex;
        gap: 1rem;
    }
</style>