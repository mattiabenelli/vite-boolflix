<script>
import { store } from '../store.js';
export default {
    data(){
        return{
            store
        }
    },
   computed: {
        starVote(index){
            let newVote = Math.floor(store.FilmList[index].vote_average / 2)
            return newVote        
        }
    },
    
}
</script>

<template lang="">
    <div class="card-container">
        <div class="card film" v-for="(item,index) in store.FilmList" :key="index">
            <div class="card-img">
                <img class="poster" :src="`http://image.tmdb.org/t/p/w500/${item.poster_path}`" alt="">
            </div>
            <div>{{ item.title }}</div>
            <div>{{ item.original_title }}</div>
            <img :src="`https://unpkg.com/language-icons/icons/${item.original_language}.svg`">
            <div>{{  starVote(index) }}</div>
        </div>
        <div class="card series" v-for="(item,index) in store.SeriesList" :key="index">
            <div class="card-img">
                <img class="poster" :src="`http://image.tmdb.org/t/p/w500/${item.poster_path}`" alt="">
            </div>
            <div>{{ item.name }}</div>
            <div>{{ item.original_name}}</div>
            <img :src="`https://unpkg.com/language-icons/icons/${item.original_language}.svg`">
            <div>{{ item.vote_average }}</div>
        </div>
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
    .card{
        width: 20%;
        text-align: center;
        margin: 10px 0;
        .poster{
        height: 100px;
        }
        img{
            height: 20px;
        }
    }
    .card.series{
        color: red;
    }
    .card.film{
        color: orange;
    }
    
</style>