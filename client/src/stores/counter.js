import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    baseUrlApi: "https://api.spoonacular.com/recipes",
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
    search: "",
    recipes: [],
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
        this.histories = data;
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
        this.router.push("/order-history");

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

    async fetchDetailProduct(id) {
      try {
        this.isLoad = true;
        const { data } = await axios({
          url: this.baseUrl + "/products/" + id,
          method: "get",
        });
        this.product = data;
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        this.router.push("/products/404-not-found");
      }
    },

    async fetchRecipe() {
      try {
        this.isLoad = true;
        let urlParam = this.baseUrlApi;

        if (!this.search) {
          this.search = "cake";
        }
        const { data } = await axios({
          url:
            urlParam +
            "/complexSearch?query=" +
            this.search +
            "&addRecipeInformation=true&apiKey=9d968254de8548bb8054fa72faa6f9d5",
          method: "get",
        });
        this.recipes = data.results;

        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;

        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async bmiHandler(value) {
      try {
        this.isLoad = true;
        const { data } = await axios({
          url: this.baseUrl + "/bmi",
          method: "post",
          data: {
            age: value.age,
            weight: value.weight,
            height: value.height,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });

        Swal.fire({
          icon: "info",
          title: "Result",
          html: `Health: ${data.data.health} <br>
          BMI: ${data.data.bmi}<br>
          Healthy BMI Range: ${data.data.healthy_bmi_range}
            `,
        });
        this.isLoad = false;
      } catch (error) {
        this.isLoad = false;
        console.log(error, "<<<2");

        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
  },
});
