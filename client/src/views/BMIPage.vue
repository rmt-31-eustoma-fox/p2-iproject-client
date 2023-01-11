<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      age: "",
      weight: "",
      height: "",
    };
  },

  methods: {
    ...mapActions(useCounterStore, ["bmiHandler"]),

    submitHandler() {
      this.bmiHandler({
        age: this.age,
        weight: this.weight,
        height: this.height,
      });
    },
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
            <section
              class="relative flex flex-wrap lg:h-screen lg:items-center"
            >
              <div
                class="w-full px-4 py-5 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-5"
              >
                <div class="mx-auto max-w-lg text-center">
                  <h1 class="text-2xl font-bold sm:text-3xl">
                    Test Your BMI Here!
                  </h1>
                  <p class="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    libero nulla eaque error neque ipsa culpa autem, at itaque
                    nostrum!
                  </p>
                </div>

                <form
                  @submit.prevent="submitHandler"
                  class="mx-auto mt-8 mb-0 max-w-md space-y-4"
                >
                  <div>
                    <label for="age" class="sr-only">Age</label>
                    <div class="relative">
                      <input
                        v-model="age"
                        type="number"
                        class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Age"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label for="weight" class="sr-only">Weight</label>
                    <div class="relative">
                      <input
                        v-model="weight"
                        type="number"
                        class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Weight"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label for="height" class="sr-only">Height</label>
                    <div class="relative">
                      <input
                        v-model="height"
                        type="number"
                        class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Height"
                        required
                      />
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <button
                      type="submit"
                      class="ml-3 inline-block rounded-lg bg-[#bc6c25] px-5 py-3 text-sm font-medium text-white"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              <div class="relative h-full w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                  alt="BMI"
                  src="https://cdn.vertex42.com/ExcelTemplates/Images/bmi-chart.gif"
                  class="absolute inset-0 h-full w-full object-none"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
