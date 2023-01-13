<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  computed: {
    ...mapState(useCounterStore, ["dataCategory"]),
  },
  data() {
    return {
      nameTodo: "",
      dateEnd: "",
      CategoryId: "",
      level: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["getallCategory", "createTodo"]),
    formAdd() {
      const dataInput = {
        nameTodo: this.nameTodo,
        dateEnd: this.dateEnd,
        CategoryId: this.CategoryId,
        level: this.level,
      };
      this.createTodo(dataInput);
    },
  },
  created() {
    this.getallCategory();
  },
};
</script>
<template>
  <form>
    <div class="mb-6">
      <label
        for="add todo"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Add todo</label
      >
      <input
        v-model="nameTodo"
        type="text"
        id="add todo"
        placeholder="insert your todo here"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required
      />
    </div>
    <div class="mb-6">
      <label
        for="date"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Date finish</label
      >
      <input
        v-model="dateEnd"
        type="date"
        id="date"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="name@flowbite.com"
        required
      />
    </div>
    <div class="mb-6">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Category</label
      >
      <select
        v-model="CategoryId"
        name="Catgory"
        id=""
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      >
        <option class="text-center" selected disabled>
          ====Select Category=====
        </option>
        <option
          v-for="(item, index) in dataCategory"
          :key="index"
          :value="item.id"
        >
          {{ item.nameCategory }}
        </option>
      </select>
    </div>
    <div class="mb-6">
      <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
        Level Todo
      </h3>
      <ul
        class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <li
          class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
        >
          <div class="flex items-center pl-3">
            <input
              v-model="level"
              id="horizontal-list-radio-id"
              type="radio"
              value="easy"
              name="list-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="horizontal-list-radio-id"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Easy</label
            >
          </div>
        </li>
        <li
          class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
        >
          <div class="flex items-center pl-3">
            <input
              v-model="level"
              id="horizontal-list-radio-millitary"
              type="radio"
              value="medium"
              name="list-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="horizontal-list-radio-millitary"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Medium</label
            >
          </div>
        </li>
        <li class="w-full dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              v-model="level"
              id="horizontal-list-radio-passport"
              type="radio"
              value="hard"
              name="list-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="horizontal-list-radio-passport"
              class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Hard</label
            >
          </div>
        </li>
      </ul>
    </div>

    <button
      @click.prevent="formAdd"
      type="submit"
      class="justify-item-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Add This Now
    </button>
  </form>
</template>
