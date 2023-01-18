<script>
import axios from 'axios'
import AppSearch from '../components/AppSearch.vue';

import { store } from '../store.js';


export default {
    components:{
        AppSearch
    },
    data(){
        return{
            store
        } 
    },
    mounted(){
        this.getFilm();
    },
    methods:{
        getFilm(){
            let myUrl = store.url + store.searchText

            axios.get(myUrl).then((response) => {
                store.FilmList = response.data.results
            })
        },
        getLanguage(){
            store.FilmList.original_language = language;
            console.log(language.toUpperCase())
        }
    },
}
</script>

<template lang="">
    <AppSearch @search="getFilm, getLanguage" />
    <div class="card" v-for="(item,index) in store.FilmList" :key="index">
            <div>{{ item.title }}</div>
            <div>{{ item.original_title }}</div>
            <div>{{ item.original_language }}</div>
            <div>{{ item.vote_average }}</div>
            <!-- <img src="`https://flagsapi.com/BE/flat/64.png`"> -->
        </div>
</template>

<style lang="scss">
    .card{
        display: flex;
        gap: 20px
    }
</style>