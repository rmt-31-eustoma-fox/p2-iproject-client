<script>
import ReviewCard from "../components/ReviewCard.vue";
import SideBar from "../components/SideBar.vue";
import { useShowStore } from "../stores";
import { mapState, mapActions, mapWritableState } from "pinia";
export default {
  data() {
    return {
      reviewsLocal: [],
    };
  },
  components: {
    ReviewCard,
    SideBar,
  },
  computed: {
    ...mapState(useShowStore, ["reviews", "showDetail", "reviewCount"]),
    ...mapWritableState(useShowStore, ["options"])
  },
  methods: {
    ...mapActions(useShowStore, ["fetchShowDetail", "fetchAllReviews"]),
    directToAddReview(id) {
      this.$router.push(`/shows/${id}/add-review`);
    },
    nextPage() {
      this.options.page += 1;
      this.fetchAllShows();
    },
    prevPage() {
      this.options.page -= 1;
      this.fetchAllShows();
    }
  },
  created() {
    this.fetchAllReviews(this.$route.params.id);
    // this.reviewsLocal = this.reviews;
    this.fetchShowDetail(this.$route.params.id);
  },
};
</script>

<template>
  <div
    class="grid grid-cols-2 grid-rows-2 bg-main-grey h-full"
    style="grid-template-columns: 320px auto"
  >
    <SideBar />
    <div class="flex justify-around items-center bg-darker-grey row-span-2">
      <img :src="showDetail.image_path" class="poster-review rounded-lg" />
      <div
        class="grid grid-cols-2 grid-rows-3 bg-darker-grey gap-5"
        id="review-card-container"
        style="position: relative"
      >
        <ReviewCard v-for="review in reviews" :review="review" />
        <div
          class="flex place-self-end gap-5 text-darker-green"
          style="position: absolute; bottom: 0px; right: 0px"
        >
          <p @click="prevPage" v-if="this.options.page != 1">Prev</p>
          <p @click="nextPage" v-if="this.reviewCount > 6 && this.options.page == Math.ceil(this.reviewCount/6)">Next</p>
        </div>
      </div>
    </div>
  </div>
  <button
    class="text-xl bg-darker-green py-4 px-2 rounded-2xl"
    style="position: absolute; bottom: 80px; right: 80px"
    @click="directToAddReview(showDetail.id)"
  >
    ➕Add yours
  </button>
</template>
