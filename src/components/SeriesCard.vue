<script>
import { store } from '../store.js';
export default {
    data(){
        return{
            store
        }
    },
   methods: {
        starVote(index){
            let newVote = Math.floor(store.FilmList[index].vote_average / 2)
            return newVote        
        },
    },
}
</script>

<template lang="">
    <div class="card series">
        <div class="card-img">
        <img class="poster" :src="`http://image.tmdb.org/t/p/w500/${item.poster_path}`" alt="">
        </div>
        <div>{{ item.name }}</div>
        <div>{{ item.original_name}}</div>
        <img :src="`https://unpkg.com/language-icons/icons/${item.original_language}.svg`">
        <div>{{ starVote(index) }}</div>
    </div>
</template>

<style lang="scss">
    .card.series{
        color: red;
    }
    
</style>