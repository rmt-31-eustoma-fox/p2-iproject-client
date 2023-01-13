<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  computed: {
    ...mapState(useCounterStore, ["dataCategory"]),
  },
  data() {
    return {
      nameCategory: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, [
      "getallCategory",
      "addCatgeory",
      "destroyCategory",
    ]),
    addCatgeoryList() {
      const dataInput = {
        nameCategory: this.nameCategory,
      };
      this.addCatgeory(dataInput);
    },
  },
  created() {
    this.getallCategory();
  },
};
</script>
<template>
  <div
    class="text-center p-5 rounded-md shadow text-3xl font-bold bg-slate-300"
  >
    Category in Your List
  </div>
  <div class="overflow-y-auto h-96 bg-slate-50">
    <div
      v-for="(item, index) in dataCategory"
      :key="index"
      class="shadow-md mx-20 p-5 text-base rounded-lg my-3 grid grid-cols-6 gap-2 bg-white"
    >
      <div class="col-span-5 text-center text-lg font-bold">
        {{ item.nameCategory }}
      </div>
      <div class="text-right">
        <button
          @click.prevent="destroyCategory(item.id)"
          type="button"
          class="material-symbols-outlined focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 mr-2 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          delete
        </button>
      </div>
    </div>
  </div>
  <div class="bg-slate-100 grid grid-cols-6 p-4 rounded-md gap-2 shadow-lg">
    <div class="mt-2">
      <label class="font-semibold">Insert Category</label>
    </div>
    <div class="col-span-4 mt-2">
      <input
        v-model="nameCategory"
        type="text"
        class="bg-white w-full rounded py-1 px-3"
        placeholder="insert here"
      />
    </div>
    <div>
      <button
        @click.prevent="addCatgeoryList"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        add list
      </button>
    </div>
  </div>
</template>
