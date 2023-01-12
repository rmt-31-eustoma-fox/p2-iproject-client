<script>
import { useShowStore } from "../stores";
import { mapWritableState, mapActions } from "pinia";

export default {
  computed: {
    ...mapWritableState(useShowStore, ["loginForm"]),
  },
  methods: {
    ...mapActions(useShowStore, ["handleLogin", "handleGoogle"]),
    submitHandler() {
      const data = {
        email: this.loginForm.email,
        password: this.loginForm.password,
      };
      this.handleLogin(data);
    },
    async callback(response) {
      await this.handleGoogle(response);
    },
  },
};
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col justify-end">
      <div class="px-10">
        <img src="../assets/glosseries-logo.png" style="height: 400px" />
      </div>
      <form
        class="flex flex-col gap-5 border-2 border-darker-green rounded-md ml-10 w-2/5 py-4 px-10"
        style="position: absolute; left: 20px; bottom: 60px"
        @submit.prevent="submitHandler"
      >
        <h1 class="text-2xl font-bold">Log in</h1>
        <div class="flex flex-col">
          <label for="email"> Email: </label>
          <input
            id="email"
            type="email"
            class="px-4 py-1 rounded bg-gray-200"
            v-model="loginForm.email"
          />
        </div>
        <div class="flex flex-col">
          <label for="password"> Password: </label>
          <input
            id="password"
            type="password"
            class="px-4 py-1 rounded bg-gray-200"
            v-model="loginForm.password"
          />
        </div>
        <input type="submit" class="bg-main-green py-1" value="Login" />
        <div class="text-center">
          <p>or</p>
          <GoogleLogin :callback="callback" />
        </div>
        <h1 class="text-center">Don't have an account? Sign up here</h1>
      </form>
    </div>

    <div class="">
      <img
        class="absolute bottom-0 right-0 h-4/5"
        src="../assets/home-illustration.png"
      />
    </div>
  </div>
</template>
