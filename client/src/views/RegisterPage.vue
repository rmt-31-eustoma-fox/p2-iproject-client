<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapActions(useCounterStore, ["registerHandler"]),

    submitHandler() {
      this.registerHandler({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<template>
  <section class="bg-white pt-6">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section
        class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
      >
        <img
          alt="Night"
          src="https://www.wallpaperflare.com/static/303/806/547/tea-biscuits-sweets-chinese-wallpaper.jpg"
          class="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        <div class="hidden lg:relative lg:block lg:p-12">
          <img class="h-8 sm:h-10" src="../assets/Logo de'Millie.jpg" />

          <h2
            class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
          >
            Welcome to de'Millie
          </h2>
        </div>
      </section>

      <main
        aria-label="Main"
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <div class="relative -mt-16 block lg:hidden">
            <img class="h-8 sm:h-10" src="../assets/Logo de'Millie.jpg" />

            <h1
              class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
            >
              Welcome to de'Millie
            </h1>
          </div>

          <h2 class="text-2xl font-bold text-grey-600 sm:text-3xl text-center">
            Register Here!
          </h2>

          <form
            class="mt-8 grid grid-cols-6 gap-6"
            @submit.prevent="submitHandler"
          >
            <div class="col-span-6">
              <label
                for="Email"
                class="block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                v-model="email"
                type="email"
                id="email"
                name="email"
                class="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2.5"
                placeholder="Email"
                required
              />
            </div>

            <div class="col-span-6">
              <label
                for="Password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                v-model="password"
                type="text"
                id="password"
                name="password"
                class="mt-1 w-full rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2.5"
                placeholder="Password"
                required
              />
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                class="inline-block shrink-0 rounded-md border border-[#bc6c25] bg-[#bc6c25] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#bc6c25] focus:outline-none focus:ring active:text-blue-500"
              >
                Create an account
              </button>

              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <router-link to="/login" href="" class="text-gray-700 underline"
                  >Log in</router-link
                >.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>

<style></style>
