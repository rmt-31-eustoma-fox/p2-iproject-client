<script>
import Navbar from "../components/Navbar.vue"
import Card from "../components/Card.vue"

import { useCounterStore } from "../stores/counter";
import { mapActions,mapState } from "pinia";
export default {
    components : {
        Navbar,
        Card
    },
    computed : {
        ...mapState(useCounterStore,['moviesList'])
    },
    methods: {
        ...mapActions(useCounterStore,['fetchMovie'])
    },
    created(){
        this.fetchMovie()
    }
}
</script>


<template>
    <Navbar />
    <div class="container my-4">
        <h3 class="text-center my-4">Movie List Trending</h3>
        <div class="justify-content-center d-flex">
            <button @click="fetchMovie({time:'day'})" type="button" class="btn btn-outline-primary m-2 " >day</button>
            <button @click="fetchMovie({time:'week'})" type="button" class="btn btn-outline-info m-2" >week</button>
        </div>
        <div class="row">
          <Card v-for="item in moviesList" :key="item.id" :item="item" :hasAddtoFav="true" />
        </div>
      </div>
      <!-- End Course -->
</template>