<script>
import axios from 'axios'

import { store } from '../store.js';

export default {
    data(){
        return store
    },
    beforeMount(){
        this.getFilm();
    },
    methods:{
        getFilm(){
            axios.get(store.url).then((response) => {
                store.FilmList = (response.data)
            })
        }
    }
}
</script>

<template lang="">
    <div>
        
    </div>
</template>

<style lang="">
    
</style>