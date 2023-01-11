<script>
import Navbar from "./components/NavbarHome.vue";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
  },
};
</script>

<template>
  <section>
    <Navbar />
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
}
</style>
