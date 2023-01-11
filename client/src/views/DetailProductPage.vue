<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  methods: {
    ...mapActions(useCounterStore, ["fetchDetailProduct", "addCartHandler"]),
  },

  computed: {
    ...mapWritableState(useCounterStore, ["product"]),
  },

  created() {
    this.fetchDetailProduct(this.$route.params.id);
  },
};
</script>

<template>
  <section>
    <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
      <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
        <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
          <img
            alt=""
            :src="product.imgUrl"
            class="object-cover w-full aspect-square rounded-xl"
          />
        </div>

        <div class="sticky top-0">
          <strong
            class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
          >
            {{ product.Category.name }}
          </strong>
          <div class="flex justify-between mt-8">
            <div class="max-w-[35ch]">
              <h1 class="text-2xl font-bold">
                {{ product.name }}
              </h1>
            </div>

            <p class="text-lg font-bold">
              Rp.{{ Number(product.price).toLocaleString() }},-
            </p>
          </div>

          <details
            class="group relative mt-4 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary class="block">
              <div>
                <div class="prose max-w-none group-open:hidden">
                  <p>
                    {{ product.description }}
                  </p>
                </div>
              </div>
            </summary>
          </details>
          <form class="mt-8">
            <div class="flex mt-8">
              <button
                @click.prevent="addCartHandler(product.id)"
                type="submit"
                class="block px-5 py-3 ml-3 text-xs font-medium text-white bg-[#b08968] rounded hover:bg-[#7f5539]"
              >
                Add to Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
