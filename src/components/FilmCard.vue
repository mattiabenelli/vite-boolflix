<script>
 export default {
    props:{
        card: Object,
    },
   methods: {
        starVote(){
            return Math.floor(this.card.vote_average / 2)       
        },
        getFlags(){
            let flags= `https://www.countryflagicons.com/FLAT/64/${this.card.original_language.toUpperCase()}.png`
            if (this.card.original_language == 'en'){
                this.card.original_language = 'gb'
            }
            else if (this.card.original_language == 'ja'){
                this.card.original_language = 'jp'
            }
            else if (this.card.original_language == 'ko'){
                this.card.original_language = 'kr'
            }

            return flags
        }
    },
    
}
</script>

<template lang="">
    <div class="card film">
        <div class="card-img">
            <img class="poster" :src="`http://image.tmdb.org/t/p/w342/${card.poster_path}`" alt="">
        </div>
        <div>{{ card.title }}</div>
        <div>{{ card.original_title }}</div>
        <img :src="getFlags()">
        <fa v-for="n in starVote()" :icon="['fas','star']" />
        <fa v-for="n in 5 - starVote()" :icon="['far','star']" />
    </div>
</template>

<style lang="scss">
    .card.film{
        color: orange;
    }
    
</style>