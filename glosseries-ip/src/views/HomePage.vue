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
  methods: {
    ...mapActions(useShowStore, ["fetchAllShows", "fetchAllFavorites"]),
  },
  created() {
    this.fetchAllShows();
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
      class="bg-darker-grey flex flex-col px-28 justify-around row-span-2 fit-screen-height"
      style="height: 100vh; margin: auto 0" 
      id="content"
    >
      <div>
        <h1 class="text-darker-green mb-4">Your watch list:</h1>
        <CardContainerReg :condition="'unwatched'" />
      </div>
      <div>
        <h1 class="text-darker-green mb-4">You have watched:</h1>
        <CardContainerReg :condition="'watched'" />
      </div>
      <div>
        <h1 class="text-darker-green mb-4">Popular right now:</h1>
        <CardContainerReg :condition="'popular'" />
      </div>
    </main>
  </div>
</template>
