<script>
import { store } from '../store.js';
export default {
    // data(){
    //     return{
    //         store
    //     }
    // },
    props:{
        card: Object,
    },
   methods: {
        starVote(){
            let newVote = Math.floor(this.card.vote_average / 2)
            return newVote        
        },
    },
    
}
</script>

<template lang="">
    <div class="card film">
        <div class="card-img">
            <img class="poster" :src="`http://image.tmdb.org/t/p/w500/${card.poster_path}`" alt="">
        </div>
        <div>{{ card.title }}</div>
        <div>{{ card.original_title }}</div>
        <img :src="`https://unpkg.com/language-icons/icons/${card.original_language}.svg`">
        <div>{{  starVote() }}</div>
    </div>
</template>

<style lang="scss">
    .card.film{
        color: orange;
    }
    
</style>