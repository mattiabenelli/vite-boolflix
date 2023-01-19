<script>
import FilmCard from '../components/FilmCard.vue';
import SeriesCard from '../components/SeriesCard.vue';

import { store } from '../store.js';


export default {
    components:{
        FilmCard,
        SeriesCard
    },
    data(){
        return{
            store
        } 
    },
    mounted(){
    },
}
</script>

<template lang="">
    <div class="card-container">
        <FilmCard  v-for="(item,index) in store.FilmList" :key="index" :card="item" />
    </div>
    <div class="card-container">
        <SeriesCard v-for="(item,index) in store.SeriesList" :key="index" :card="item" />
    </div>
</template>

<style lang="scss">
    .card-container{
        margin: 20px auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;
    }
</style>