<script>
import Navbar from "./components/NavbarHome.vue";
import PreLoader from "./components/PreLoader.vue"
export default {
  components: {
    Navbar,
    PreLoader
  },

};
</script>

<template>
  <section>
    <Navbar />
    <PreLoader />
    <RouterView />
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  color: white;
  background: #1e242a;
}
</style>
