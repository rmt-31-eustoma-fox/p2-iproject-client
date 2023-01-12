<script>
import ShowCardBig from "../components/ShowCardBig.vue";
import { useShowStore } from "../stores";
import { mapState, mapWritableState, mapActions } from "pinia";
import Paginate from "vuejs-paginate-next";
export default {
  components: {
    ShowCardBig,
    paginate: Paginate,
  },
  computed: {
    ...mapState(useShowStore, ["shows", "pageCount"]),
    ...mapWritableState(useShowStore, ["options"])
  },
  methods: {
    ...mapActions(useShowStore, ['fetchAllShows'
    ]),
    // clickCallback(pageNum) {
    //   console.log(pageNum);
    // },
    nextPage() {
      this.options.page += 1;
      this.fetchAllShows();
    },
    prevPage() {
      this.options.page -= 1;
      this.fetchAllShows();
    }
  },
};
</script>

<template>
  <div
    class="grid bg-darker-grey px-14 justify-start gap-5"
    id="card-container"
    style="
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(3, 1fr);
      position: relative;"
  >
    <ShowCardBig v-for="show in shows" :show="show" />
    <div
      class="flex place-self-end gap-5 text-darker-green"
      style="position: absolute; bottom: 0px; right: 0px"
    >
      <p @click="prevPage" v-if="this.options.page != 1">Prev</p>
      <p @click="nextPage">Next</p>
    </div>
    <!-- <paginate
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      class="flex place-self-end gap-5 text-darker-green"
      style="position: absolute; bottom: 0px; right: 0px"
    >
      <span slot="prevContent">back</span>
      <span slot="nextContent">Changed next button</span>
    </paginate> -->
  </div>
</template>
