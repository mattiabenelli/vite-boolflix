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
        </div>
</template>

<style lang="scss">
    .card{
        display: flex;
        gap: 20px
    }
</style>