<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "@/stores/counter";
export default {
  props: ["history"],
  methods: {
    dateFormating(date) {
      return new Date(date).toLocaleString("us-US", { dateStyle: "long" });
    },
  },
};
</script>

<template>
  <article class="flex bg-white transition hover:shadow-xl py-2">
    <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
      <time
        datetime="2022-10-10"
        class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
      >
        <span class="w-px flex-1 bg-gray-900/10"></span>

        <span>{{ dateFormating(history.createdAt) }}</span>
        <span class="w-px flex-1 bg-gray-900/10"></span>
      </time>
    </div>

    <div class="hidden sm:block sm:basis-56">
      <img
        alt="Guitar"
        :src="history.Product.imgUrl"
        class="aspect-square h-full w-full object-cover"
      />
    </div>

    <div class="flex flex-1 flex-col justify-between">
      <div
        class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6"
      >
        <a href="#">
          <h3 class="font-bold uppercase text-gray-900">
            {{ history.Product.name }}
          </h3>
        </a>

        <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
          Rp.{{ Number(history.Product.price).toLocaleString() }},-
        </p>
      </div>
      <div class="sm:flex sm:items-end sm:justify-end">
        <p
          class="block bg-[#ddb892] px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition"
        >
          Success
        </p>
      </div>
    </div>
  </article>
</template>
