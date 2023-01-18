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
        this.getFilmSeries();
    },
    methods:{
        getFilmSeries(){
            let myUrlMovies = store.urlFilm + store.searchText

            axios.get(myUrlMovies).then((response) => {
                store.FilmList = response.data.results
            })
            let myUrlSeries = store.urlSeries + store.searchText

            axios.get(myUrlSeries).then((response) => {
                store.SeriesList = response.data.results
            })
        },
    },
}
</script>

<template lang="">
    <AppSearch @search="getFilmSeries" />
    <div class="card" v-for="(item,index) in store.FilmList" :key="index">
        <div>{{ item.title }}</div>
        <div>{{ item.original_title }}</div>
        <img :src="`https://unpkg.com/language-icons/icons/${item.original_language}.svg`">
        <div>{{ item.vote_average }}</div>
    </div>
    <div class="card series" v-for="(item,index) in store.SeriesList" :key="index">
        <div>{{ item.name }}</div>
        <div>{{ item.original_name}}</div>
        <img :src="`https://unpkg.com/language-icons/icons/${item.original_language}.svg`">
        <div>{{ item.vote_average }}</div>
    </div>
</template>

<style lang="scss">
    .card{
        display: flex;
        align-items: center;
        gap: 20px;
        img{
            height: 20px;
        }
    }
    .series{
        color: red;
    }
</style>