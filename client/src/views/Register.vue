<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      reg: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(useCounterStore, ["handleRegister"]),

    submitReg() {
      const data = {
        email: this.reg.email,
        password: this.reg.password,
      };

      this.handleRegister(data);
    },
  },
};
</script>

<template>
  <section class="vh-100" id="register">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Sign Up</h3>

              <!-- <div class="form-outline mb-4">
                <input
                  type="email"
                  id="typeEmailX-2"
                  class="form-control form-control-lg"
                  placeholder="EMAIL"
                />
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="typePasswordX-2"
                  class="form-control form-control-lg"
                  placeholder="PASSWORD"
                />
              </div> -->

              <form @submit.prevent="submitReg">
                <div class="form-outline mb-4 form-floating">
                  <input
                    v-model="reg.email"
                    type="email"
                    id="typeEmailX-2"
                    class="form-control form-control-lg"
                    placeholder="Email"
                  />
                  <label for="typeEmailX-2">Email address</label>
                </div>

                <div class="form-outline mb-4 form-floating">
                  <input
                    v-model="reg.password"
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
                  Create Account
                </button>
              </form>

              <hr class="my-4" />

              <div class="my-4">
                <a
                  @click.prevent="this.$router.push('/login')"
                  href=""
                  style="text-decoration: none"
                  ><strong>ALREADY HAVE AN ACCOUNT?</strong></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#register {
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
