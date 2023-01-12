<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  computed: {
    ...mapState(useCounterStore, ["dataTodoList"]),
    checkId() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(useCounterStore, [
      "insertList",
      "todoId",
      "getcomplete",
      "getDelete",
    ]),
    createList() {
      const dataInput = {
        nameList: this.nameList,
      };
      this.insertList(dataInput, this.checkId);
    },
    complete(data2) {
      this.getcomplete(this.checkId, data2);
    },
    deletedata(data2) {
      this.getDelete(this.checkId, data2);
    },
  },
  created() {
    this.todoId(this.checkId);
  },
  updated() {
    this.dataTodoList;
  },
};
</script>
<template>
  <div id="list todo">
    <div
      class="text-center m-5 p-5 rounded-md shadow text-3xl font-bold bg-slate-100"
    >
      Your List From {{ dataTodoList[0]?.nameTodo }}
    </div>
    <!-- {{ checkId }} -->
    <div class="overflow-y-auto h-96">
      <div
        v-for="(item, index) in dataTodoList[0]?.Todolists"
        :key="index"
        class="shadow mx-20 p-5 text-base rounded-lg my-1 grid grid-cols-6 gap-2"
      >
        <div class="col-span-4 text-center text-lg font-bold">
          {{ item.nameList }}
        </div>
        <div class="col-span-2 text-right">
          <button
            @click.prevent="complete(item.id)"
            type="button"
            v-if="item.status == 'complete'"
            class="text-right material-symbols-outlined text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 mr-2 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <!-- {{  }} -->
            check_box
          </button>
          <button
            @click.prevent="complete(item.id)"
            type="button"
            v-if="item.status == 'uncomplete'"
            class="text-right material-symbols-outlined text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1 mr-2 mb-1 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            check_box
          </button>

          <button
            @click.prevent="deletedata(item.id)"
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
        <label class="font-semibold">Insert Your List</label>
      </div>
      <div class="col-span-4 mt-2">
        <input
          v-model="nameList"
          type="text"
          class="bg-white w-full rounded py-1 px-3"
          placeholder="insert here"
        />
      </div>
      <div>
        <button
          @click.prevent="createList"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          add list
        </button>
      </div>
    </div>
  </div>
</template>
