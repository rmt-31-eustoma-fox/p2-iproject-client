<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Preloader from "./components/Preloader.vue";

export default {
  components: {
    Navbar,
    Preloader,
  },
};
</script>

<template>
  <Preloader />
  <Navbar />
  <RouterView />
</template>
