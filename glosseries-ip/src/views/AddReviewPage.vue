<script>
import SideBar from "../components/SideBar.vue";
import { useShowStore } from "../stores";
import { mapState, mapActions, mapWritableState } from "pinia";

export default {
  components: {
    SideBar,
  },
  computed: {
    ...mapState(useShowStore, ["showDetail"]),
    ...mapWritableState(useShowStore, ["reviewForm", "reviews"]),
  },
  methods: {
    ...mapActions(useShowStore, ["addReview"]),
    submitHandler() {
      const data = {
        rating: this.reviewForm.rating,
        content: this.reviewForm.content,
      };
      console.log(data);
      this.addReview(data, this.$route.params.id);
    },
  },
};
</script>

<template>
  <div
    class="grid grid-cols-2 grid-rows-2 bg-main-grey h-full"
    style="grid-template-columns: 350px auto; grid-template-rows: auto 200px"
  >
    <!-- Sidebar -->
    <SideBar />

    <div class="flex justify-around items-center bg-darker-grey row-span-2">
      <img :src="showDetail.image_path" class="poster-review" />
      <div>
        <form
          class="flex flex-col gap-5 items-center"
          @submit.prevent="submitHandler(data)"
        >
          <h1 class="text-2xl text-center">
            Leave a review for
            <span class="font-bold text-darker-green">{{
              showDetail.name
            }}</span>
          </h1>
          <!-- <Rating v-model="val" :stars="5"/> -->

          <!-- <div class="star-wrapper text-md">
            <a href="#" class="fas fa-star s1" name="rating" value="1"></a>
            <a href="#" class="fas fa-star s2" name="rating" value="2"></a>
            <a href="#" class="fas fa-star s3" name="rating" value="3"></a>
            <a href="#" class="fas fa-star s4" name="rating" value="4"></a>
            <a href="#" class="fas fa-star s5" name="rating" value="5"></a>
          </div> -->
          <textarea
            v-model="reviewForm.content"
            type="textarea"
            class="px-8 py-4 rounded-md bg-gray-200"
            style="width: 300px; height: 100px"
          ></textarea>

          <div class="flex gap-5">
            <h1>Rating:</h1>
            <select v-model="reviewForm.rating">
              <option disable selected>--Rating--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <input
            type="submit"
            class="bg-main-green py-3 px-8 rounded-md shadow-sm hover:scale-110 ease-in"
          />
        </form>
      </div>
    </div>
  </div>
</template>
