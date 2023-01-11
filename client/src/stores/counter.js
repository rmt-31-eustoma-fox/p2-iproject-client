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
    histories: [],
    loginStatus: false,
    isLoad: false,
    categories: [],
    categorySort: "",
    product: {},
    options: {
      page: 1,
    },
    totalPrice: 0,
  }),

  getters: {},
  actions: {
    async fetchProduct() {
      try {
        this.isLoad = true;
        let urlParam = this.baseUrl + "/products";
        if (this.categorySort) {
          urlParam += "?filter[category]=" + this.categorySort;
        }
        const { data } = await axios({
          url: urlParam,
          method: "get",
        });
        this.products = data;
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;

        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async fetchCategory() {
      try {
        this.isLoad = true;
        const { data } = await axios({
          url: this.baseUrl + "/categories",
          method: "get",
        });
        this.categories = data;
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async loginHandler(value) {
      try {
        this.isLoad = true;
        const { data } = await axios({
          url: this.baseUrl + "/login",
          method: "post",
          data: {
            email: value.email,
            password: value.password,
          },
        });

        localStorage.access_token = data.access_token;
        this.loginStatus = true;
        this.router.push("/");
        Swal.fire({
          icon: "success",
          title: "Welcome to de'Millie!",
          timer: 1500,
          showConfirmButton: false,
        });
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        Swal.fire({
          icon: "error",
          title: "wrong email/password",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    },

    async handleOnGoogleLogin(response) {
      try {
        this.isLoad = true;
        const { data } = await axios({
          url: this.baseUrl + "/google-sign-in",
          method: "post",
          headers: {
            "google-oauth-token": response.credential,
          },
        });

        localStorage.access_token = data.access_token;
        this.loginStatus = true;
        this.router.push("/");
        Swal.fire({
          icon: "success",
          title: "Welcome to de'Millie!",
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

    async fetchCart() {
      try {
        this.isLoad = true;
        const { data } = await axios({
          url: this.baseUrl + "/cart",
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.carts = data;
        for (let i = 0; i < this.carts.length; i++) {
          this.totalPrice += Number(this.carts[i].Product.price);
        }
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async addCartHandler(id) {
      try {
        this.isLoad = true;
        const { data } = await axios({
          url: this.baseUrl + "/cart/" + id,
          method: "post",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.fetchCart();
        Swal.fire({
          icon: "success",
          title: "Product Successfully added to Shopping Cart",
          timer: 1500,
          showConfirmButton: false,
        });
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        Swal.fire({
          icon: "error",
          title: "Please Login First!",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    },

    async deleteCartHandler(id) {
      try {
        this.isLoad = true;
        const { data } = await axios({
          url: this.baseUrl + "/cart/" + id,
          method: "delete",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.totalPrice = 0;
        this.fetchCart();
        Swal.fire({
          icon: "success",
          title: "Product successfully remove from Shopping Cart",
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

    async fetchOrderHistory() {
      try {
        this.isLoad = true;

        const { data } = await axios({
          url: this.baseUrl + "/order-history",
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.histories = data.orders;
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;

        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async addOrderHandler() {
      try {
        this.isLoad = true;

        const { data } = await axios({
          url: this.baseUrl + "/pay",
          method: "post",
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.fetchOrderHistory();
        this.fetchCart();
        this.totalPrice = 0;
        Swal.fire({
          icon: "success",
          title: "Your Payment is successfull",
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
