<template>
    <header class="head">
        <img class="head__logo" src="../assets/logo.png" />
    <h1 class="head__title">{{ title }}</h1>
    <ul class="nav-list">
        <li v-for="item in menuItems"
        v-bind:key="item.path"       
        ><router-link v-bind:to="item.path">{{ item.name }}</router-link></li>
    </ul>
</header>
</template>

<script>
    export default{
        data(){
            return{
                title:'E-Library',
                menuItems:[
                    {path: '/', name:'Home'},
                    {path: '/about', name:'About us'},
                    {path: '/contact', name:'Contact us'},
                    {path: '/books', name:'Books'},
                    {path: '/create', name:"Manage Books"}
                ],
            }
        }
    }
</script>

<style>
    .head{
        display: flex;
        align-items: flex-end;
        gap: 3rem;
        background-color: rgb(250, 232, 220) ;
        padding: 1rem;
    }
    .head__title{
        font-size: 1.3rem;
    }
    .head__logo{
        max-width: 80px;
    }

    .nav-list{
        list-style-type: none;
        display: flex;
        gap: 3rem;
    }

    .nav-list a{
        transition:  all .2 ease-out;
    }

    .nav-list a:hover{
     color: rgba(63, 63, 63, 0.7);
    }
    a:link, a:visited{
        text-decoration: none;
        font-size: 1.3rem;
        color: #2c3e50;
        font-weight: 500;
    }
</style>