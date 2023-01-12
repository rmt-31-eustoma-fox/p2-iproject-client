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
    <div class="container d-flex flex-column justify-content-center align-items-center">
        <div>
          <h2>{{detailMovie.title}}</h2>
        </div>
        <div class="row mb-3">
            <div class="col d-flex justify-content-center align-items-center">
                <img
                :src="`https://image.tmdb.org/t/p/w200/${detailMovie.poster_path}`"
                alt="gambar" class="d-block">
            </div>
            <div class="col d-flex justify-content-center align-items-center flex-column">
                <h3>Scan Here !!!</h3>
                <img :src="detailMovie.qrcode" alt="" class="w-50">
            </div>
        </div>
        <div>
            <div>
                <button v-for="x in detailMovie.genres" :key="x.id" class="btn btn-info btn-sm m-1">{{x.name}}</button>
            </div>
            <hr>
        </div>
        <div class="row">
            <div class="col">
                <i class="bi bi-star-fill"></i> popularity : {{ detailMovie.popularity }}
            </div>
            <div class="col">
                <i class="bi bi-currency-dollar"></i> budget : {{ detailMovie.budget }} <br>
                <i class="bi bi-cash"></i> revenue : {{ detailMovie.revenue }}
            </div>
            <div class="col">
                <i class="bi bi-calendar-check-fill"></i> release date : {{(new Date(detailMovie.release_date)).toDateString()  }}
            </div>
            <hr>
        </div>
        <div class="px-5 ">
          {{detailMovie.overview}}
        </div>
      </div>
</template>