<script>
import axios from 'axios'
import AppSearch from '../components/AppSearch.vue';
import FilmCard from '../components/FilmCard.vue';

import { store } from '../store.js';


export default {
    components:{
        AppSearch,
        FilmCard
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
    <FilmCard />
</template>

<style lang="scss">
</style>