<script>
import HelloWorld from './components/HelloWorld.vue';

import { store } from './store.js';

export default{
  components:{
    HelloWorld
  },
  data(){
    return{
      store
    }
  }
}

</script>

<template>
  <HelloWorld />  
</template>

<style lang="scss">
  @use './styles/generals.scss' as *
</style>
