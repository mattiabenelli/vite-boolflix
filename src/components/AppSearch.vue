<script>

import { store } from '../store.js';

export default {
  data(){
    return{
      store
    }
  },
  methods:{
  }
}

</script>

<template lang="">
  <div class="searchbar">
    <input type="text" placeholder="cerca film" v-model="store.searchText">
    <button @click="$emit('search')" type="submit">Cerca</button>
  </div>
</template>

<style lang="">
  
</style>