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
    <div class="card series">
        <div class="card-img">
        <img class="poster" :src="`http://image.tmdb.org/t/p/w500/${card.poster_path}`" alt="">
        </div>
        <div>{{ card.name }}</div>
        <div>{{ card.original_name}}</div>
        <img :src="`https://unpkg.com/language-icons/icons/${card.original_language}.svg`">
        <div>{{ starVote() }}</div>
    </div>
</template>

<style lang="scss">
    .card.series{
        color: red;
    }
    
</style>