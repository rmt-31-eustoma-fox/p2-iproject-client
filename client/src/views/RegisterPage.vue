<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  methods: {
    ...mapActions(useCounterStore, ["register", "callback"]),
    registerHandler() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.register(user);
    },
  },
};
</script>

<template>
  <section class="gradient-custom">
    <form @submit.prevent="registerHandler">
      <div class="card bg-dark text-white" style="border-radius: 1rem">
      <div class="card-body p-5 text-center">
        <div class="mb-md-5 mt-md-2 pb-5">
          <h2 class="fw-bold mb-2 text-uppercase">
            Are you ready for the war?
          </h2>
          <p class="text-white-50 mb-5">
            Please enter your email and password!
          </p>

          <div class="form-outline form-white mb-4">
            <input
              v-model="username"
              style="background: black"
              type="text"
              id="username"
              class="form-control form-control-lg"
            />
            <label class="form-label" for="username">Username</label>
          </div>

          <div class="form-outline form-white mb-4">
            <input
              v-model="email"
              style="background: black"
              type="email"
              id="typeEmailX"
              class="form-control form-control-lg"
            />
            <label class="form-label" for="typeEmailX">Email</label>
          </div>

          <div class="form-outline form-white mb-4">
            <input
              v-model="password"
              style="background: black"
              type="password"
              id="typePasswordX"
              class="form-control form-control-lg"
            />
            <label class="form-label" for="typePasswordX">Password</label>
          </div>

          <button class="btn btn-outline-light btn-lg px-5" type="submit">
            Register
          </button>

          <div class="mt-4">
              <GoogleLogin :callback="callback" />
          </div>

          <div>
          <p class="mt-2">
            Already have an account?
            <a href="#!" class="text-white-50 fw-bold">Sign In</a>
          </p>
        </div>
        </div>
      </div>
    </div>
    </form>
  </section>
</template>

<style scoped>
section{
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  background-size: cover;
  background-position: center;
}
.card {
  height: 670px;
}
.gradient-custom {
  padding: 30px;
  /* fallback for old browsers */
  background: black;
}
</style>