<script>
import ProductList from "../components/ProductList.vue";
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  components: {
    ProductList,
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchProduct", "fetchCategory"]),
  },

  computed: {
    ...mapWritableState(useCounterStore, [
      "categories",
      "categorySort",
      "options",
    ]),
  },
  created() {
    this.fetchProduct(this.options);
    this.fetchCategory();
  },
  watch: {
    categorySort(newValue, oldValue) {
      this.options.CategoryId = newValue;
      this.fetchProduct(this.options);
    },
  },
};
</script>

<template>
  <div class="container grid grid-cols-5 gap-6 pt-10 pb-16 items-start mx-auto">
    <!-- products -->
    <div class="col-span-3 col-start-2">
      <div class="flex items-center mb-4">
        <select
          v-model="categorySort"
          v-on:change="fetchProduct"
          name="sort"
          id="sort"
          class="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
        >
          <option value="">All Category</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>

      <ProductList />
    </div>
    <!-- ./products -->
  </div>
</template>

<style></style>
