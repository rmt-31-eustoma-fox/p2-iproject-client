<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  props: ["item"],

  methods: {
    ...mapActions(useCounterStore, ["handleDetail"]),

    checkDetail() {
      this.handleDetail(this.item.uuid);
    },
  },
};
</script>

<template>
  <div class="col mb-5">
    <div class="card h-100 bg-dark">
      <!-- Sale badge-->
      <div
        class="addFav addFavIcon badge position-absolute btn btn-outline-light"
        style="top: 0.5rem; right: 0.5rem; font-size: large"
      >
        &hearts;
      </div>
      <!-- Product image-->
      <img class="card-img-top" :src="item.imageUrl" alt="..." />
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder text-white">{{ item.displayName }}</h5>
          <h6 class="text-white">{{ item.role.displayName }}</h6>

          <!-- Product price-->
          <!-- <span class="text-muted text-decoration-line-through text-white"
            >$20.00</span
          >
          $18.00 -->
        </div>
      </div>
      <!-- Product actions-->
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
