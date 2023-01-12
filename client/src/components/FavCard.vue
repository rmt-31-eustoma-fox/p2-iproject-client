<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  props: ["item"],

  methods: {
    ...mapActions(useCounterStore, ["handleDetail", "removeFav"]),
    checkDetail() {
      this.handleDetail(this.item.uuid);
    },

    handleRemove() {
      this.removeFav(this.item.id);
    },
  },
};
</script>

<template>
  <div class="col mb-5">
    <div class="card h-100 bg-dark">
      <div
        @click="handleRemove"
        class="addFav addFavIcon badge position-absolute btn btn-outline-light"
        style="top: 0.5rem; right: 0.5rem"
      >
        Remove
      </div>
      <img class="card-img-top" :src="item.imageUrl" alt="..." />
      <div class="card-body p-4">
        <div class="text-center">
          <h5 class="fw-bolder text-white">{{ item.displayName }}</h5>
          <h6 class="text-white">{{ item.role }}</h6>
        </div>
      </div>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <a
            @click.prevent="checkDetail"
            class="btn btn-outline-light mt-auto w-100"
            href="#"
            >Detail</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-color: white;
}
</style>
