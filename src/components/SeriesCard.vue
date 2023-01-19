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
        },
        posterImg(value){
            if(value.poster_path){
                return `http://image.tmdb.org/t/p/w342/${value.poster_path}`
            }
            else{
                return `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgAlTMpHUfzVUBVvhBODpjQ0z72IsefK5BPz6_Uc6H5i8bHBX02ipD5xxJGCG9Z4nZju0&usqp=CAU`
            }
        }
    },
}
</script>

<template lang="">
    <div class="card series">
        <div class="card-img">
        <img class="poster" :src="posterImg(card)" alt="">
        </div>
        <div>{{ card.name }}</div>
        <div>{{ card.original_name}}</div>
        <img :src="getFlags()">
        <div>{{ starVote() }}</div>
        <fa v-for="n in starVote()" :icon="['fas','star']" />
        <fa v-for="n in 5 - starVote()" :icon="['far','star']" />
    </div>
</template>

<style lang="scss">
    .card.series{
        color: red;
    }
    
</style>