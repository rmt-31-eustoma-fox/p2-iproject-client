<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  methods: {
    handleDonateButton() {
      this.$router.push('/donate')
    }
  }
}
</script>

<template>
  <RouterView />
  <button class="bg-main-green rounded-lg px-2 py-2" style="position: absolute; bottom: 10px; right: 10px" v-if="this.$route.name != 'donate'" @click="handleDonateButton">Click here for surprise :)</button>
</template>

<style scoped>
</style>
