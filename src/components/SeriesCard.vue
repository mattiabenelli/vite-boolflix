<script>
export default {
    props:{
        card: Object,
    },
   methods: {
        starVote(){
            let newVote = Math.floor(this.card.vote_average / 2)
            return newVote        
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
    <div class="card series">
        <div class="card-img">
        <img class="poster" :src="`http://image.tmdb.org/t/p/w342/${card.poster_path}`" alt="">
        </div>
        <div>{{ card.name }}</div>
        <div>{{ card.original_name}}</div>
        <img :src="getFlags()">
        <div>{{ starVote() }}</div>
        <fa :icon="['fas','star']" />
        <fa :icon="['far','star']" />
    </div>
</template>

<style lang="scss">
    .card.series{
        color: red;
    }
    
</style>