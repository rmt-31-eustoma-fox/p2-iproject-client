<script>
import SideBar from "../components/SideBar.vue";
import CardContainerBig from "../components/CardContainerBig.vue";
import { useShowStore } from "../stores";
import { mapActions, mapWritableState } from "pinia";

export default {
  components: {
    SideBar,
    CardContainerBig,
  },
  methods: {
    ...mapActions(useShowStore, ["fetchAllShows"]),
    submitHandler() {
      this.fetchAllShows()
    }
  },
  computed: {
    ...mapWritableState(useShowStore, ["options"]),
  },
  created() {
    this.fetchAllShows();
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
      class="bg-darker-grey pt-10 px-10 flex flex-col gap-5 flex-grow-0"
      style="height: 100vh; margin: auto 0" 
      id="content"
    >
      <h1 class="text-4xl text-center">Browse TV Series</h1>
      <form id="search-bar" class="flex gap-2 justify-center" @submit.prevent="submitHandler">
        <input
          class="px-6 py-3 rounded-2xl w-3/5"
          type="text"
          placeholder="Search.."
          v-model="options.keyword"
        />
        <input type="submit" class="bg-white px-6 py-3 rounded-2xl" value="Search"/>
      </form>
      <CardContainerBig />
    </div>

    <!-- <div
      class="grid bg-darker-grey px-28 justify-start"
      id="card-container"
      style="
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(3, 1fr);
      "
    >
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
      <div
        class="flex flex-col items-center rounded-lg shadow-sm hover:scale-110 hover:ease-in"
        id="card"
      >
        <img
          src="../assets/sample-poster.jpg"
          class="w-auto pt-2"
          style="height: auto; width: 100px"
        />
        <p class="text-sm">Stranger Things</p>
      </div>
    </div> -->
  </div>
</template>
