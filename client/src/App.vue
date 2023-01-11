<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/Loader.vue";
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "./stores/counter";

export default {
  components: {
    Navbar,
    Loader,
    Footer,
  },
  computed: {
    ...mapWritableState(useCounterStore, ["isLoad"]),
  },
};
</script>

<template>
  <Loader v-if="isLoad" />
  <Navbar />

  <RouterView />
  <Footer />
</template>

<style></style>
