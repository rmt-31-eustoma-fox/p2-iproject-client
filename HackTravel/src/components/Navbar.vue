<script>
import { useCounterStore } from '../stores/counter'
import { mapActions, mapWritableState } from 'pinia'

export default {
  methods: {
    ...mapActions(useCounterStore, ["logoutHandler"])
  },
  computed: {
    ...mapWritableState(useCounterStore, ["loginStatus"])
  },
  created() {
    if (localStorage.access_token) {
      this.loginStatus = true
    }
  }
}
</script>

<template>
    <nav class="p-3 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div class="container flex flex-wrap items-center justify-between mx-auto" id="navbar-solid-bg">
          <RouterLink class="flex items-center" to="/">
                <span class="self-center text-xl font-bold whitespace-nowrap dark:text-white">HACKTRAVEL</span>
          </RouterLink>
          <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                  <li>
                    <RouterLink v-if="loginStatus == true" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" to="/transactions">Transaction</RouterLink>
                  </li>
                  <li>
                    <RouterLink v-if="loginStatus !== true" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" to="/login">Login</RouterLink>
                  </li>
                  <li>
                    <RouterLink v-if="loginStatus !== true" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" to="/register">Register</RouterLink>
                  </li>
                  <li>
                    <a v-if="loginStatus == true" @click.prevent="logoutHandler" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" href="">
                      Logout
                    </a>
                  </li>
                </ul>
          </div>      
        </div>
      </nav>
</template>