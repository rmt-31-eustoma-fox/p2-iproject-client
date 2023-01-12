<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "@/stores/counter";
export default {
  props: ["recipe"],
  methods: {
    ...mapActions(useCounterStore, ["deleteCartHandler"]),
  },
};
</script>
<template>
  <a :href="recipe.sourceUrl" target="_blank" class="relative block group">
    <img
      :src="recipe.image"
      alt=""
      class="h-[350px] w-full object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px]"
    />

    <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
      <h3
        class="text-xl font-medium text-white"
        style="
          color: white;
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            1px 1px 0 #000;
        "
      >
        {{ recipe.title }}
      </h3>

      <span
        class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
      >
        Detail Recipe
      </span>
    </div>
  </a>
</template>

<style></style>
