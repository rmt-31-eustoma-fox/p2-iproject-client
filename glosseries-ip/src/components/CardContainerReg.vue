<script>
import ShowCard from "../components/ShowCard.vue";
import { useShowStore } from "../stores";
import { mapState, mapWritableState } from "pinia";
import Paginate from "vuejs-paginate-next";
export default {
  props: ["condition"],
  methods: {
    clickCallback(pageNum) {
      this.options.page = pageNum;
      console.log(this.options.page)
    },
  },
  components: {
    ShowCard,
    paginate: Paginate,
  },
  computed: {
    ...mapState(useShowStore, ["favorites", "favoriteShows", "shows"]),
    ...mapWritableState(useShowStore, ["options"]),
    watched() {
      const filteredFavorites = this.favorites.filter((el) => {
        return el.status == "Watched";
      });
      const filteredShows = filteredFavorites.map((el1) => {
        return this.favoriteShows.filter((el2) => {
          return el2.id == el1.ShowId;
        })[0];
      });
      console.log(filteredShows, "filteredShows");
      return filteredShows;
    },
    unwatched() {
      const filteredFavorites = this.favorites.filter((el) => {
        return el.status == "Not watched";
      });
      const filteredShows = filteredFavorites.map((el1) => {
        return this.favoriteShows.filter((el2) => {
          return el2.id == el1.ShowId;
        })[0];
      });
      console.log(filteredShows, "filteredShows");
      return filteredShows;
    },
    popular() {
      return this.shows.slice(0, 5);
    },
  },
};
</script>
<template>
  <!-- {{ JSON.stringify(favoriteShows.length) }} -->
  <div class="flex gap-5" id="card-container" style="position: relative">
    <h1 v-if="condition != 'popular' &&(watched.length == 0 || unwatched.length == 0) && this.$route.name != 'list'">There is nothing in your list.</h1>
    <ShowCard
      v-for="show in watched"
      v-if="condition == 'watched'"
      :show="show"
      :condition="condition"
    />
    <ShowCard
      v-for="show in unwatched"
      v-if="condition == 'unwatched'"
      :show="show"
      :condition="condition"
    />
    <ShowCard
      v-for="show in popular"
      v-if="condition == 'popular'"
      :show="show"
      :condition="popular"
    />
    <div
      class="flex place-self-end gap-5 text-darker-green"
      style="position: absolute; bottom: 0px; right: 0px"
    >
    
      <p  v-if="condition == 'watched' && this.$route.name != 'list'"><router-link to="/list">See more</router-link></p>
      <p  v-if="condition == 'unwatched' && this.$route.name != 'list'"><router-link to="/list">See more</router-link></p>
      <p  v-if="condition == 'popular' && this.$route.name != 'list'"><router-link to="/browse">See more</router-link></p>
    </div>
  </div>
</template>

<style scoped></style>
