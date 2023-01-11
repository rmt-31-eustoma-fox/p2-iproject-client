<script>
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  methods: {
    ...mapActions(useCounterStore, ["logoutHandler"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["loginStatus"]),
  },
  created() {
    if (localStorage.access_token) {
      this.loginStatus = true;
    }
  },
};
</script>

<template>
  <header aria-label="Site Header" class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-6">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <router-link to="/" class="block text-teal-600" href="">
            <img src="../assets/Logo de'Millie.jpg" class="h-20" />
          </router-link>
        </div>

        <div class="md:flex md:items-center md:gap-12">
          <nav aria-label="Site Nav" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <router-link
                  to="/"
                  class="text-[#000000] transition hover:text-gray-500/75"
                  href=""
                >
                  Home
                </router-link>
              </li>

              <li v-if="loginStatus">
                <router-link
                  to="/cart"
                  class="text-[#000000] transition hover:text-gray-500/75"
                  href=""
                >
                  Cart
                </router-link>
              </li>
              <li v-if="loginStatus">
                <router-link
                  to="/order-history"
                  class="text-[#000000] transition hover:text-gray-500/75"
                  href=""
                >
                  Order History
                </router-link>
              </li>
              <li v-if="loginStatus">
                <router-link
                  to="/recipe"
                  class="text-[#000000] transition hover:text-gray-500/75"
                  href=""
                >
                  Recipe
                </router-link>
              </li>
            </ul>
          </nav>

          <div class="flex items-center gap-4">
            <div v-if="!loginStatus" class="sm:flex sm:gap-4">
              <router-link
                to="/login"
                class="rounded-md bg-[#7f5539] px-5 py-2.5 text-sm font-medium text-white shadow"
                href=""
              >
                Log in
              </router-link>
            </div>

            <div v-if="!loginStatus" class="hidden sm:flex">
              <router-link
                to="/register"
                class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#7f5539]"
                href=""
              >
                Register
              </router-link>
            </div>

            <div v-if="loginStatus" class="sm:flex sm:gap-4">
              <a
                @click.prevent="logoutHandler"
                class="rounded-md bg-[#7f5539] px-5 py-2.5 text-sm font-medium text-white shadow"
                href=""
              >
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style></style>
