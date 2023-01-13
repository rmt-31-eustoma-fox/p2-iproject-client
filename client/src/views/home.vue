<script>
import navbarContent from "../components/navbarcontent.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import sidebarvue from "../components/sidebar.vue";
import formAdd from "../components/formadd.vue";
import todolist from "../components/todolist.vue";
import category from "../components/category.vue";
import loader from "../components/loader.vue";
export default {
  components: {
    navbarContent,
    sidebarvue,
    formAdd,
    todolist,
    category,
    loader,
  },
  computed: {
    ...mapState(useCounterStore, [
      "dataAllTodo",
      "datalocation",
      "dataIp",
      "totalTodo",
    ]),
    regQuery() {
      return this.$route.name;
    },
    mydataIp() {
      return this.dataIp;
    },
  },
  data() {
    return {
      loaderVuew: "true",
    };
  },

  methods: {
    ...mapActions(useCounterStore, [
      "handleLogout",
      "getAlltodo",
      "todoId",
      "geolocation",
      "getIp",
      "deleteTodo",
      "getGempa",
    ]),
    formatDate(data) {
      return new Date(data).toLocaleString("id-ID", { dateStyle: "full" });
    },
  },

  created() {
    this.getGempa();
    this.getAlltodo();
    this.mydataIp;
    setTimeout(() => {
      this.loaderVuew = "false";
    }, 2000);
  },
  updated() {
    console.log("update");
    this.getAlltodo();
    setTimeout(() => {
      this.loaderVuew = "false";
    }, 2000);
  },
};
</script>
<template>
  <div>
    <loader v-if="loaderVuew == 'true'" />
    <navbarContent />
    <!-- <navbarContent /> -->
    <div class="grid grid-cols-5 gap-3 mt-3">
      <!----sidebar-->
      <sidebarvue @handleLogout="handleLogout" />
      <!----Maim content----->
      <div class="col-span-3 p-0 m-0">
        <!-- {{ regQuery }} -->
        <!---dasboard-->
        <!-- <div id="dasboard"> -->
        <!-- <section> -->
        <div
          v-if="regQuery == 'home'"
          class="text-center p-5 rounded-md shadow text-3xl font-bold bg-slate-300"
        >
          Your Todo List Now
        </div>
        <div
          class="overflow-y-auto h-96 bg-slate-50"
          style="height: 70vh"
          v-if="regQuery == 'home'"
        >
          <div
            v-for="(item, index) in dataAllTodo"
            :key="index"
            class="w-4/5 mx-auto my-3 p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              {{ item.nameTodo }}
            </h5>
            <p
              class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400"
            >
              start date : {{ formatDate(item.dateStart) }}
            </p>
            <p
              class="mb-5 text-lg font-semibold text-red-500 sm:text-lg dark:text-gray-400"
            >
              end date : {{ formatDate(item.dateEnd) }}
            </p>
            <div
              class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4"
            >
              <button
                @click.preverent="deleteTodo(item.id)"
                class="bg-slate-100 rounded-md px-3 py-2 hover:text-red-700"
              >
                Delete
              </button>
              <button
                @click.prevent="todoId(item.id)"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Do it Now
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- </section> -->
        <!-- </div> -->

        <todolist v-if="regQuery == 'todo'" />

        <!-- fo list tod----->
        <formAdd v-if="regQuery == 'form'" />

        <category v-if="regQuery == 'category'" />
      </div>
      <div>
        <a
          class="twitter-timeline shadow"
          data-height="600"
          href="https://twitter.com/infoBMKG?ref_src=twsrc%5Etfw"
          >Tweets by infoBMKG</a
        >
      </div>
    </div>
  </div>
</template>
<style>
body {
  font-family: "Poppins", sans-serif;
}
</style>
