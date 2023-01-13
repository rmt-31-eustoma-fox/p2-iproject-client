<script>
import loader from "./components/loader.vue";
export default {
  components: {
    loader,
  },
  data() {
    return {
      loader: "false",
    };
  },
  beforeCreate() {
    this.loader = "true";
    console.log("before create");
  },
  updated() {
    this.loader = "false";
    console.log("create");
  },
};
</script>

<template>
  <loader v-if="loader == 'true'" />
  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400;1,800&display=swap");
body {
  font-family: "Poppins", sans-serif;
  position: relative;
}

swal2-confirm,
swal2-styled {
  background-color: #1f25d9;
}
</style>
