<script>
import AppSearch from '../components/AppSearch.vue';

import axios from 'axios'
import { store } from '../store.js';
export default{
  components:{
    AppSearch,
  },
  data(){
    return{
      store
    }
  },
  methods:{
        getFilmSeries(){
            let myUrlMovies = store.urlFilm + store.searchText

            axios.get(myUrlMovies).then((response) => {
                store.FilmList = response.data.results
            })
            let myUrlSeries = store.urlSeries + store.searchText

            axios.get(myUrlSeries).then((response) => {
                store.SeriesList = response.data.results
            })
        },
    },
}
</script>

<template lang="">
    <header>
        <div class="row">
            <div class="header-logo">
                <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
            </div>
            <AppSearch @search="getFilmSeries" />
        </div>
    </header>
</template>

<style lang="scss">
    header{
        height: 100px;
        background-color: black;
        .header-logo{
            padding: 0 20px;
            img{
                height: 50px;
            }
        }
    }
</style>