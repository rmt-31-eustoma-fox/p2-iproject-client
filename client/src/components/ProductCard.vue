<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "@/stores/counter";

export default {
  props: ["product"],
  methods: {
    ...mapActions(useCounterStore, ["addCartHandler"]),
  },
};
</script>

<template>
  <div v-if="product" class="relative block overflow-hidden group">
    <RouterLink :to="`/products/${product.id}`">
      <img
        :src="product.imgUrl"
        alt=""
        class="object-contain w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
      />
    </RouterLink>

    <div class="relative p-6 bg-white border border-gray-100">
      <RouterLink :to="`/products/${product.id}`">
        <h3
          class="mt-4 text-lg font-medium text-gray-900 truncate hover:whitespace-normal"
        >
          {{ product.name }}
        </h3>

        <p class="mt-1.5 text-base text-gray-700">Rp.{{ product.price }},-</p>
      </RouterLink>

      <form class="mt-4">
        <button
          v-if="product"
          class="block w-full p-4 text-white font-medium transition bg-[#dda15e] rounded hover:scale-105"
          @click.prevent="addCartHandler(product.id)"
        >
          Add to Cart
        </button>
      </form>
    </div>
  </div>
</template>

<style></style>
