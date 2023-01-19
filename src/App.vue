<script>
import axios from 'axios'
import AppSearch from './components/AppSearch.vue';
import FilmList from './components/FilmList.vue';

import { store } from './store.js';

export default{
  components:{
    AppSearch,
    FilmList
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

<template>
  <AppSearch @search="getFilmSeries" />
  <FilmList />
</template>

<style lang="scss">
  @use './styles/generals.scss' as *
</style>
