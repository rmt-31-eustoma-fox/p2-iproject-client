<template>
  <div class="vl-parent">
    <loading
      v-model:active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    />
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { useCounterStore } from "../stores/counter";
import { mapWritableState } from "pinia";
export default {
  computed: {
    ...mapWritableState(useCounterStore, ["isLoading", "fullPage"]),
  },
  components: {
    Loading,
  },
  methods: {
    onCancel() {
      console.log("User cancelled the loader.");
    },
  },
};
</script>
