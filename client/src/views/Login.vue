<script>
import { mapActions } from "pinia";
import { useMainStore } from "../stores/main";
import VFacebookLogin from "vue-facebook-login-component-next";

export default {
  components: {
    VFacebookLogin,
  },
  data() {
    return {
      email: "",
      password: "",
      loginOptions: {
        scope:"email, user_gender, user_birthday, user_age_range"
      }
    };
  },
  methods: {
    ...mapActions(useMainStore, ["loginForm", "changePage", "googleLogin","facebookLogin"]),
    login() {
      this.loginForm({ email: this.email, password: this.password });
    },
    gLogin(resp) {
      const creden = resp.credential;
      // console.log(resp);
      // console.log(creden);
      // console.log("running");
      this.googleLogin(creden);
    },
    faceLog(resp) {
    //   console.log("logging facebook");
      // const {accessToken} = resp.authResponse;
      // console.log(resp.authResponse.accessToken);
      // this.faceToken = resp.authResponse.accessToken;
      // console.log(accessToken);
      // console.log(response);
      // const {access_token} = resp;
      this.facebookLogin(resp.authResponse.accessToken);
    },
    beforeRouteLeave(to,from,next) {
      FB.logout((resp) => {
        console.log("succes logout");
      })
      next();
    }
  },
};
</script>

<template>
  <div class="h-screen relative bg-black">
    <div class="flex h-full">
      <img
        src="../assets/iron-man-in-the-dark-1ikpgsjkoayh9equ22.png"
        alt=""
        class="absolute h-full right-12 z-0 object-contain top-0"
      />
      <div
        class="flex flex-col items-center self-center ml-36 bg-[#1A2B47] py-8 rounded-md w-[38%]"
      >
        <h2 class="text-5xl mb-16 font-semibold text-white">Sign In</h2>
        <form
          @submit.prevent="login"
          class="flex flex-col space-y-8 w-2/3 relative z-30 [&_*]:text-white"
        >
          <div class="w-full relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              v-model="email"
              class="cursor-text text-slate-700 peer p-2 border-b bg-transparent focus:outline-0 border-gray-400 w-full focus:placeholder:hidden"
            />
            <label
              for="email"
              class="w-1/3 cursor-text transition-all text-gray-400 absolute top-1.5 left-2 -translate-y-5 peer-focus:-translate-y-5 text-xs peer-focus:text-xs peer-focus:-translate-x-1 -translate-x-1 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:translate-x-0.5 peer-placeholder-shown:text-base"
              >Email Address</label
            >
          </div>
          <div class="w-full relative">
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              v-model="password"
              class="text-slate-700 peer p-2 border-b bg-transparent focus:outline-0 border-gray-400 w-full focus:placeholder:hidden"
            />
            <label
              for="password"
              class="transition-all text-gray-400 absolute top-1.5 left-2 -translate-y-5 peer-focus:-translate-y-5 text-xs peer-focus:text-xs peer-focus:-translate-x-1 -translate-x-1 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:translate-x-0.5 peer-placeholder-shown:text-base"
              >Password</label
            >
          </div>
          <button
            class="font-semibold self-center inline-block w-1/3 mx-auto py-2 bg-blue-600 hover:bg-white hover:text-blue-500 active:bg-blue-600 text-center rounded-md hover:-translate-y-1.5 hover:shadow-lg text-white transition active:translate-y-0.5 active:shadow-md cursor-pointer"
          >
            Sign In
          </button>
          <div class="self-center space-y-4 flex flex-col">
            <p class="self-center">OR</p>
            <div class="flex flex-col space-y-4">
              <GoogleLogin :callback="gLogin" />
              <v-facebook-login
                app-id="6726169904064850"
                class="flex space-x-4"
                :login-options="loginOptions"
                :autoLoad="false"
                @login="faceLog"
              ></v-facebook-login>
            </div>
          </div>
        </form>
        <div class="text-center mt-8 relative z-50">
          <p class="text-white">Doesn't have an account?</p>
          <p>
            <a
              @click.prevent="changePage('/register')"
              class="text-blue-500 cursor-pointer"
              >Sign Up</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
