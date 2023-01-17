<script>
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
  }
}

</script>

<template>
  <FilmList />
</template>

<style lang="scss">
  @use './styles/generals.scss' as *
</style>
