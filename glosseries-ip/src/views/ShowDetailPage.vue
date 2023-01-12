<script>
import SideBar from "../components/SideBar.vue";
import ReviewCard from "../components/ReviewCard.vue";
import { useShowStore } from "../stores";
import { mapState, mapActions } from "pinia";
import Thumbnails from "../components/Thumbnails.vue";
export default {
  data() {
    return {
      showDetailLocal: {},
    };
  },
  components: {
    SideBar,
    ReviewCard,
    Thumbnails,
  },
  methods: {
    ...mapActions(useShowStore, [
      "fetchShowDetail",
      "addFavorite",
      "removeFavorite",
      "fetchAllReviews",
    ]),
    directToReview(id) {
      this.fetchAllReviews(id);
      this.$router.push(`/shows/${id}/review`);
    },
  },
  computed: {
    ...mapState(useShowStore, ["showDetail", "foundFavorite"]),
    displayPictures() {
      return this.showDetail.pictures.slice(0, 3);
    },
  },
  created() {
    // console.log(this.$route.params.id)
    this.fetchShowDetail(this.$route.params.id);
    this.fetchAllReviews(this.$route.params.id);
  },
};
</script>

<template>
  <div
    class="grid grid-cols-2 grid-rows-2 bg-main-grey h-full"
    style="grid-template-columns: 320px auto; grid-template-rows: 80px auto"
  >
    <SideBar />
    <div
      class="bg-darker-grey pt-10 px-10 py-10 flex flex-col justify-between items-center max-h-full row-span-2"
      id="content"
    >
      <div class="text-center flex flex-col gap-5">
        <h1
          class="text-4xl text-darker-green font-bold py-2"
          style="text-transform: uppercase"
        >
          {{ showDetail.name }}
        </h1>
        <div class="flex justify-center gap-10">
          <h1 class="bg-main-green py-2 px-4 rounded-lg">
            Genre:
            <span class="font-bold">{{ showDetail.genres[0] }}</span>
          </h1>
          <h1 class="bg-main-green py-2 px-4 rounded-lg">
            {{ showDetail.episodes[showDetail.episodes.length - 1].season }}
            Seasons, {{ showDetail.episodes.length }} Episodes
          </h1>
          <h1 class="bg-main-green py-2 px-4 rounded-lg">
            Status: <span class="font-bold">Ended</span>
          </h1>
        </div>
      </div>

      <div class="flex gap-2">
        <h1 v-if="displayPictures.length == 0">
          Sorry, no image is available for this show.
        </h1>
        <Thumbnails v-for="image in displayPictures" :image="image" />
        <!-- <img
          src="../assets/sample-pic-1.jpg"
          class="rounded-lg"
          style="width: 250px; height: 150px"
        />
        <img
          src="../assets/sample-pic-2.jpg"
          class="rounded-lg"
          style="width: 250px; height: 150px"
        /> -->
      </div>

      <div
        class="bg-white px-4 py-2 rounded-lg flex flex-col gap-3 w-5/6 text-justify"
        id="synopsis"
      >
        <p class="text-sm">
          {{ showDetail.description }}
        </p>
      </div>
      <div class="">
        <a @click="directToReview(showDetail.id)"
          >See what people are saying about
          <span class="font-bold">{{ showDetail.name }}</span> ➡️</a
        >
      </div>
      <button
        class="bg-darker-green py-2 px-4 rounded-lg"
        style="position: absolute; top: 10px; right: 20px"
        v-if="foundFavorite.favorite == null"
        @click.prevent="addFavorite(showDetail.id)"
      >
        ➕ Add to List
      </button>
      <button
        class="bg-darker-green py-2 px-4 rounded-lg"
        style="
          position: absolute;
          top: 10px;
          right: 20px;
          background-color: red;
          color: white;
        "
        v-else
        @click.prevent="removeFavorite(showDetail.id)"
      >
        ➖ Remove from List
      </button>
    </div>

    <!-- <div class="flex gap-10 bg-darker-grey justify-center pt-10 items-center">
				<button class="bg-main-green py-2 px-4 rounded-lg">
					Leave a Review
				</button>
				<button class="bg-main-green py-2 px-4 rounded-lg">
					Add to Watch List
				</button>
			</div> -->
  </div>
</template>
