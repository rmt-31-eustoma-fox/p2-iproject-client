<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "@/stores/counter";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },

  methods: {
    ...mapActions(useCounterStore, ["fetchProduct"]),
  },

  computed: {
    ...mapWritableState(useCounterStore, ["products"]),
  },

  created() {
    this.fetchProduct();
  },
};
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <ProductCard
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    />
  </div>
</template>

<style></style>
