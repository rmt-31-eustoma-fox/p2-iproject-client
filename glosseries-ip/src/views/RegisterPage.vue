<script>
import { useShowStore } from '../stores';
import { mapWritableState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapWritableState(useShowStore, ['registerForm'])
  },
  methods: {
    ...mapActions(useShowStore, ['handleRegister']),
    submitHandler(){
      console.log('masuk button')
      const data = {
        email: this.registerForm.email,
        username: this.registerForm.username,
        password: this.registerForm.password
      }
      this.handleRegister(data);
    }
  }
}
</script>

<template>
  <div class="flex flex-col bg-main-grey">
    <div class="bg-main-grey flex flex-col justify-end">
      <div class="px-10">
        <img src="../assets/glosseries-logo.png" style="height: 300px" />
      </div>
      <form
        class="flex flex-col gap-5 border-2 border-darker-green rounded-md ml-10 w-2/5 py-4 px-10"
        style="position: absolute; left: 20px; bottom: 60px"
        @submit.prevent="submitHandler"
      >
        <h1 class="text-2xl font-bold">Register</h1>
        <div class="flex flex-col">
          <label for="username"> Username: </label>
          <input
            id="username"
            type="text"
            class="px-4 py-1 rounded bg-gray-200"
            v-model="registerForm.username"
          />
        </div>
        <div class="flex flex-col">
          <label for="email"> Email: </label>
          <input
            id="email"
            type="email"
            class="px-4 py-1 rounded bg-gray-200"
            v-model="registerForm.email"
          />
        </div>
        <div class="flex flex-col">
          <label for="password"> Password: </label>
          <input
            id="password"
            type="password"
            class="px-4 py-1 rounded bg-gray-200"
            v-model="registerForm.password"
          />
        </div>
        <input type="submit" class="bg-main-green py-1" value="Register">
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
