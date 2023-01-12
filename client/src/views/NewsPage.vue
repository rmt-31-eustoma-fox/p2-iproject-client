<script>
import Navbar from "../components/Navbar.vue"
import CardNews from "../components/CardNews.vue"

import { useCounterStore } from "../stores/counter";
import { mapActions,mapState } from "pinia";
export default {
    components : {
        Navbar,
        CardNews
    },
    computed : {
        ...mapState(useCounterStore,['news'])
    },
    methods: {
        ...mapActions(useCounterStore,['getNews'])
    },
    created(){
        this.getNews()
    }
}
</script>


<template>
    <Navbar />
    <div class="container my-4">
        <h3 class="text-center my-4">News About Movie</h3>
        <div class="row">
          <CardNews v-for="item in news" :key="item.id" :item="item"  />
        </div>
      </div>
      <!-- End Course -->
</template>