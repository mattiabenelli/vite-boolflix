<script>
import AppHeader from './components/AppHeader.vue';
import FilmList from './components/FilmList.vue';

import { store } from './store.js';

export default{
  components:{
    AppHeader,
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
  <AppHeader />
  <main>
    <FilmList />
  </main>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *
</style>
