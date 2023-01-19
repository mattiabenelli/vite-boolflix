<script>

import { store } from '../store.js';

export default {
  data(){
    return{
      store
    }
  },
}

</script>

<template lang="">
  <div class="searchbar">
    <input type="text" placeholder="cerca film" v-model="store.searchText" @keyup.enter="$emit('search')">
    <button @click="$emit('search')" type="submit">Cerca</button>
  </div>
</template>

<style lang="scss">
  .searchbar{
    padding: 0 20px;
    input, button{
      height: 50px;
      border: none;
    }
    button{
      background-color: #E20813 ;
      color: white;
      padding: 0 10px;
    }
    input{
      padding: 0 20px;
      outline: none;
    }
  }
</style>