<script>
import Navbar from '../components/Navbar.vue'
import { useCounterStore } from '../stores/counter';
import { mapState, mapActions } from 'pinia';
export default {
    computed : {
        ...mapState(useCounterStore,['detailMovie'])
    },
    components:{
        Navbar
    },
    methods : {
        ...mapActions(useCounterStore,['getDetailMovie'])
    },
    created() {
        this.getDetailMovie(this.$route.params.id)
    }
}
</script>


<template>
    <Navbar />
    <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
        <div>
          <h2>{{detailMovie.title}}</h2>
        </div>
        <div>
          <img
            :src="`https://image.tmdb.org/t/p/w200/${detailMovie.poster_path}`"
            alt="gambar" class="d-block">
          <span> popularity : {{detailMovie.popularity}} || release date : {{detailMovie.release_date}} </span>
        </div>
        <div>
          {{detailMovie.overview}}
        </div>
        <div>
            <img :src="detailMovie.qrcode" alt="" class="d-block w-50" >
        </div>
      </div>
</template>