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
        },
        posterImg(value){
            if(value.poster_path){
                return `http://image.tmdb.org/t/p/w342/${value.poster_path}`
            }
            else{
                return `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgAlTMpHUfzVUBVvhBODpjQ0z72IsefK5BPz6_Uc6H5i8bHBX02ipD5xxJGCG9Z4nZju0&usqp=CAU`
            }
        },
        lenghtDescription() {
            if (this.card.overview.length > 270) {
                this.card.overview = this.card.overview.substring(0, 201) + '...'
                return this.card.overview
            }
            return this.card.overview
        }

    },
    
}
</script>

<template lang="">
        <div class="card">
            <img :src="posterImg(card)" alt="">
            <div class="info">
                <h3>{{ card.title }}</h3>
                <div class="original-title">{{ card.original_title }}</div>
                <div>{{ lenghtDescription() }}</div>
                <div class="characteristic">
                    <div><img class="flag" :src="getFlags()"></div>
                    <div class="star">
                    <fa v-for="n in starVote()" :icon="['fas','star']" />
                    <fa v-for="n in 5 - starVote()" :icon="['far','star']" />
                </div>
                </div>
            </div>
        </div>
</template>

<style lang="sass">
.original-title
 padding-bottom: 10px
.info
 height: 100%
 h3
  padding: 15px 0
.star
    font-size:20px
.card
  text-align: center
  min-width: 200px
  max-width: 200px
  height: 400px
  border-radius: 15px
  padding: 10px
  background: white
  position: relative
  align-items: flex-end
  transition: 0.4s ease-out
  box-shadow: 0px 7px 10px rgba(black, 0.5)
  &:hover
    &:before
      opacity: 1
    .info
      opacity: 1
  &:before
    content: ""
    position: absolute
    top: 0
    left: 0
    display: block
    width: 100%
    height: 100%
    border-radius: 15px
    background: rgba(black, 0.6)
    z-index: 2
    transition: 0.5s
    opacity: 0
  img
    width: 100%
    height: 100%
    object-fit: cover
    position: absolute
    top: 0
    left: 0
    border-radius: 15px

  .info
    position: relative
    z-index: 3
    color: white
    opacity: 0
    transition: 0.5s
    h3
      margin: 0px
    p
      letter-spacing: 1px
      font-size: 15px
      margin-top: 8px
    button
      padding: 0.6rem
      outline: none
      border: none
      border-radius: 3px
      background: white
      color: black
      font-weight: bold
      cursor: pointer
      transition: 0.4s ease
      &:hover
        background: dodgerblue
        color: white
    
</style>