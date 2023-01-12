<script>
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import RecipeList from "../components/RecipeList.vue";

export default {
  components: {
    RecipeList,
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchRecipe"]),
    searchRecipe() {
      this.fetchRecipe();
    },
  },

  computed: {
    ...mapWritableState(useCounterStore, ["search", "recipes"]),
  },
  created() {
    this.fetchRecipe();
  },
};
</script>

<template>
  <section>
    <div class="flex max-h-full w-full pt-6">
      <div class="flex-1 bg-hero bg-cover bg-center bg-no-repeat">
        <div
          class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 bg-white bg-opacity-90"
        >
          <div class="col-span-3 col-start-2">
            <header class="text-center">
              <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">
                Recipe
              </h1>
            </header>

            <div class="flex items-center gap-4 pt-5">
              <a href="">
                <span class="sr-only">Logo</span>
                <span class="h-10 w-20 rounded-lg bg-gray-200"></span>
              </a>

              <form class="mb-0 hidden lg:flex" @submit.prevent="searchRecipe">
                <div class="relative">
                  <input
                    v-model="search"
                    class="h-10 rounded-lg border-gray-200 border-solid border-2 pr-10 text-sm placeholder-gray-600 focus:z-10 pl-2"
                    placeholder="Search..."
                    type="text"
                  />

                  <button
                    type="submit"
                    class="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 text-gray-600"
                  >
                    <span class="sr-only">Submit Search</span>
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <div class="grid grid-cols-3 gap-6 pt-6">
              <RecipeList
                v-for="recipe in recipes"
                :key="recipe.id"
                :recipe="recipe"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
