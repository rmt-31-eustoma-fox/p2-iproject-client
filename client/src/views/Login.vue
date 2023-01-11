<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(useCounterStore, ["handleLogin", "callback"]),

    submitLogin() {
      const data = {
        email: this.login.email,
        password: this.login.password,
      };
      this.handleLogin(data);

      // console.log(data);
    },
  },
};
</script>

<template>
  <section class="vh-100" id="login">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Sign In</h3>

              <!-- <div class="form-outline mb-4">
                  <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder="Email" />
                </div> -->

              <form @submit.prevent="submitLogin">
                <div class="form-outline mb-4 form-floating">
                  <input
                    v-model="login.email"
                    type="email"
                    id="typeEmailX-2"
                    class="form-control form-control-lg"
                    placeholder="Email"
                  />
                  <label for="typeEmailX-2">Email address</label>
                </div>

                <div class="form-outline mb-4 form-floating">
                  <input
                    v-model="login.password"
                    type="password"
                    id="typePasswordX-2"
                    class="form-control form-control-lg"
                    placeholder="Password"
                  />
                  <label for="typePasswordX-2">Password</label>
                </div>

                <button
                  class="btn btn-danger btn-lg btn-block w-100"
                  type="submit"
                >
                  Log In
                </button>
              </form>

              <!-- <hr class="my-4" /> -->

              <!-- <button
                class="btn btn-lg btn-block btn-primary my-4"
                style="background-color: #dd4b39"
                type="submit"
              >
                <i class="fab fa-google me-2"></i> Sign in with google
              </button> -->

              <GoogleLogin :callback="callback" class="my-4" />

              <hr class="my-2" />
              <div class="my-4">
                <a
                  @click.prevent="this.$router.push('/register')"
                  href=""
                  style="text-decoration: none"
                  ><strong>CREATE ACCOUNT?</strong></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#login {
  /* background-image: url('https://rare-gallery.com/uploads/posts/344840-Jett-Valorant-Video-Game.jpg'); */
  background-image: url("../assets/jett-background.jpg");
  background-size: cover;
}

a {
  color: gray;
}

a:hover {
  color: black;
}
</style>
