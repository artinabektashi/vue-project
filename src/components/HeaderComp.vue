<template>
    <header class="head">
        <img class="head__logo" src="../assets/logo.png" />
    <h1 class="head__title">{{ title }}</h1>
    <ul class="nav-list">
        <li v-for="item in menuItems"
        v-bind:key="item.path"       
        ><a v-bind:href="item.path">{{ item.name }}</a></li>
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
                ],
            }
        }
    }
</script>

<style>
    .head{
        display: flex;
        align-items: flex-end;
        gap: 4rem;
        background-color: rgb(250, 232, 220) ;
        padding: 1rem;
    }
    .head__title{
        font-size: 2rem;
    }
    .head__logo{
        max-width: 80px;
    }

    .nav-list{
        list-style-type: none;
        display: flex;
        gap: 4rem;
    }
    .nav-list a{
        text-decoration: none;
        font-size: 2rem;
    }
</style>