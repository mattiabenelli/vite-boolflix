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
    <div class="container">
        <div class="titolo">Ho trovato {{store.FilmList.length}} Film</div>
        <div class="card-container">
            <FilmCard  v-for="(item,index) in store.FilmList" :key="index" :card="item" />
        </div>
        <div class="titolo">Ho trovato {{store.SeriesList.length}} Serie</div>
        <div class="card-container">
            <SeriesCard v-for="(item,index) in store.SeriesList" :key="index" :card="item" />
        </div>
    </div>
</template>

<style lang="scss">
    .card-container{
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 20px 0;
        overflow-x: scroll;
        overflow-y: clip;
        height: 380px;
    }
    .container{
        width: 90%;
        margin: 0 auto;
    }
    .titolo{
        font-size: 40px;
        color: white;
        padding-top: 20px;
    }
</style>