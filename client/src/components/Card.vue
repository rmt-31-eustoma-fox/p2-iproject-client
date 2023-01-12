<script>
import { useCounterStore } from '../stores/counter';
import { mapActions } from 'pinia';
export default {
    props : ['item', "hasAddtoFav"],
    methods : {
        ...mapActions(useCounterStore,['addToFavorite','getDetailMovie']),
        pindahDetail() {
      this.$router.push("/detail/" + this.item.id);
    },
    }
}
</script>


<template>
    <div class="col my-2 ">
        <div class="card" style="width: 18rem">
          <img :src="`https://image.tmdb.org/t/p/w200/${item.poster_path}`" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{item.original_title}}</h5>
            <p class="card-text">{{item.overview}}</p>
            <a @click.prevent="pindahDetail"  href="#" class="btn btn-primary m-1" 
              >Detail Movie</a
            >
    
            <a @click.prevent="addToFavorite(item.id)" v-if="hasAddtoFav"  href="#"  class="btn btn-primary"
              >add to favorite</a
            >
          </div>
        </div>
      </div>
</template>