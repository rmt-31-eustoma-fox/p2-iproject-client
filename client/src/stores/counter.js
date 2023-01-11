import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    // baseUrl: "",
    products: [],
    carts: [],
    loginStatus: false,
    isLoad: false,
    categories: [],
    categorySort: "",
    product: {},
  }),

  getters: {},
  actions: {
    async registerHandler(value) {
      try {
        this.isLoad = true;
        const { data } = await axios({
          url: this.baseUrl + "/register",
          method: "post",
          data: {
            email: value.email,
            password: value.password,
          },
        });

        this.router.push("/login");

        Swal.fire({
          icon: "success",
          title: "Success Create an Account!",
          timer: 1500,
          showConfirmButton: false,
        });
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async logoutHandler() {
      try {
        this.isLoad = true;
        localStorage.clear();
        this.loginStatus = false;
        this.router.push("/");
        Swal.fire({
          icon: "success",
          title: "See You Next Time!",
          timer: 1500,
          showConfirmButton: false,
        });
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
  },
});
