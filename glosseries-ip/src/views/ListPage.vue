<script>
import SideBar from "../components/SideBar.vue";
import CardContainerReg from "../components/CardContainerReg.vue";
import { useShowStore } from "../stores";
import { mapActions } from "pinia";
export default {
  components: {
    SideBar,
    CardContainerReg,
  },
  data() {
    return {
      condition: "",
    };
  },
  methods: {
    ...mapActions(useShowStore, ["fetchAllFavorites"]),
    filterWatched() {
      console.log("masuk watched");
      this.condition = "watched";
    },
    filterUnwatched() {
      console.log("masuk unwatched");
      this.condition = "unwatched";
    },
  },
  created() {
    this.fetchAllFavorites();
  },
};
</script>

<template>
  <div
    class="grid grid-cols-2 grid-rows-2 bg-main-grey h-full"
    style="grid-template-columns: 320px auto; grid-template-rows: 80px auto"
  >
    <SideBar />
    <main
      class="bg-darker-grey flex flex-col px-28 justify-around row-span-2 fit-screen-height rounded-xl"
      style="height: 100vh"
      id="content"
    >
      <div class="flex gap-10" style="margin: 0 auto;">
        <button
          class="py-8 px-4 rounded-lg bg-main-green"
          @click="filterUnwatched"
        >
          Want to watch
        </button>
        <button
          class="py-8 px-4 rounded-lg bg-main-green"
          @click="filterWatched"
        >
          Watched
        </button>
      </div>
      <div class="bg-main-grey w-7/8 h-4/5 flex flex-col" style="">
        <CardContainerReg
          class="py-10 px-10"
          v-if="condition == 'watched'"
          :condition="condition"
        />
        <CardContainerReg
          class="py-10 px-10"
          v-if="condition == 'unwatched'"
          :condition="condition"
        />
        <CardContainerReg class="py-10 px-10" v-else />
      </div>
    </main>
  </div>
</template>
