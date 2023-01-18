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
        // this.getSeries();
        // this.getLanguage();
    },
    methods:{
        getFilm(){
            let myUrlMovies = store.urlFilm + store.searchText

            axios.get(myUrlMovies).then((response) => {
                store.FilmList = response.data.results
            })
            let myUrlSeries = store.urlSeries + store.searchText

            axios.get(myUrlSeries).then((response) => {
                store.SeriesList = response.data.results
            })
        },
        // getLanguage(){
        //     let language = (store.FilmList.original_language).toUpperCase();
        //     console.log(language)
        // }
    },
}
</script>

<template lang="">
    <AppSearch @search="getFilm" />
    <div class="card" v-for="(item,index) in store.FilmList" :key="index">
        <div>{{ item.title }}</div>
        <div>{{ item.original_title }}</div>
        <div>{{ item.original_language }}</div>
        <div>{{ item.vote_average }}</div>
        <img :src=`"https://unpkg.com/language-icons/icons/${{ item.original_language }}.svg"`>
    </div>
    <div class="card series" v-for="(item,index) in store.SeriesList" :key="index">
        <div>{{ item.name }}</div>
        <div>{{ item.original_name}}</div>
        <div>{{ item.original_language }}</div>
        <div>{{ item.vote_average }}</div>
        <!-- <img src="`https://flagsapi.com/${language}/flat/64.png`"> -->
    </div>
</template>

<style lang="scss">
    .card{
        display: flex;
        gap: 20px;
    }
    .series{
        color: red;
    }
</style>