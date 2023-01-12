import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
// import { useToast } from "vue-toast-notification";
// const $toast = useToast();
// import Swal from 'sweetalert2'

const baseUrl = "http://localhost:3000/";

export const useShowStore = defineStore("counter", {
  state() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      registerForm: {
        email: "",
        username: "",
        password: "",
      },
      reviewForm: {
        rating: 0,
        content: "",
      },
      shows: [],
      showDetail: {},
      foundFavorite: {},
      favorites: [],
      favoriteShows: [],
      reviews: [],
      options: {
        keyword: "",
        page: 1,
      },
      reviewCount: 0,
      qrCode: "",
    };
  },
  actions: {
    async handleRegister(input) {
      const { email, username, password } = input;
      try {
        const { data } = await axios({
          method: "post",
          url: baseUrl + "register",
          data: {
            email,
            username,
            password,
          },
        });
        this.router.push("/login");
      } catch (error) {
        const errMsg = error.response.data.message;
        console.log(errMsg);
      }
    },

    async handleLogin(input) {
      const { email, password } = input;
      try {
        const { data } = await axios({
          method: "post",
          url: baseUrl + "login",
          data: {
            email,
            password,
          },
        });
        const access_token = data.access_token;
        const username = data.username;
        localStorage.access_token = access_token;
        localStorage.username = username;
        this.router.push("/");
        // $toast.success("You're logged in")
      } catch (error) {
        const errMsg = error.response.data.message;
        // Swal.fire(errMsg)
        console.log(errMsg);
      }
    },

    async handleGoogle(response) {
      console.log("Encoded JWT ID token: " + response.credential);
      try {
        const { data } = await axios({
          url: baseUrl + "google-sign-in",
          method: "post",
          headers: {
            token: response.credential,
          },
        });
        // console.log(data);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);
        this.username = data.username;
        this.isLoggedIn = true;
        this.router.push("/");
      } catch (error) {
        const errMsg = error.response.data.message;
        console.log(errMsg);
      }
    },

    async fetchAllShows() {
      const { keyword, page } = this.options;
      console.log(this.options);
      try {
        const { data } = await axios({
          method: "get",
          url: baseUrl + "shows",
          params: {
            search: keyword,
            page,
          },
        });
        //experiment
        this.shows = data.shows;
      } catch (error) {
        const errMsg = error.response.data.message;
        console.log(errMsg);
      }
    },

    async fetchShowDetail(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: baseUrl + "shows/" + id,
        });
        this.showDetail = data;
        this.findFavorite(id);
        console.log(data.id);
      } catch (error) {
        const errMsg = error.response.data.message;
        console.log(errMsg);
      }
    },

    async fetchAllFavorites() {
      try {
        const { data } = await axios({
          method: "get",
          url: baseUrl + "favorites",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.favorites = data.favorites;
        this.favoriteShows = data.shows;
      } catch (error) {
        const errMsg = error.response.data.message;
        console.log(errMsg);
      }
    },

    async handleLogout() {
      localStorage.clear();
      this.router.push("/login");
    },

    async findFavorite(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: baseUrl + "favorites/" + id,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.foundFavorite = data;
      } catch (error) {
        const errMsg = error.response.data.message;
        console.log(errMsg);
      }
    },

    async addFavorite(id) {
      console.log(id, "this is id");
      try {
        const { data } = await axios({
          method: "post",
          url: baseUrl + "shows/" + id,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data.message);
        this.fetchShowDetail(id);
      } catch (error) {
        const errMsg = error.response.data.message;
        console.log(errMsg);
      }
    },

    async removeFavorite(id) {
      console.log(id, "this is id");
      try {
        const { data } = await axios({
          method: "delete",
          url: baseUrl + "favorites/" + id,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data.message);
        this.fetchShowDetail(id);
      } catch (error) {
        const errMsg = error.response.data.message;
        console.log(errMsg);
      }
    },

    async updateWatch(id) {
      try {
        const { data } = await axios({
          method: "patch",
          url: baseUrl + "favorites/" + id + "/watch",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.fetchShowDetail(id);
        this.fetchAllFavorites();
        this.fetchAllShows();
      } catch (error) {
        const errMsg = error.response.data.message;
        console.log(errMsg);
      }
    },

    async updateUnwatch(id) {
      try {
        const { data } = await axios({
          method: "patch",
          url: baseUrl + "favorites/" + id + "/unwatch",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.fetchShowDetail(id);
        this.fetchAllFavorites();
        this.fetchAllShows();
      } catch (error) {
        const errMsg = error.response.data.message;
        console.log(errMsg);
      }
    },

    async fetchAllReviews(id) {
      console.log("masuk store");
      try {
        const { data } = await axios({
          method: "get",
          url: baseUrl + "shows/" + id + "/review",
          headers: {
            access_token: localStorage.access_token,
          },
          params: {
            page: this.options.page,
          },
        });
        console.log(data);
        this.reviews = data.reviews;
        this.reviewCount = data.count;
      } catch (error) {
        const errMsg = error.response.data.message;
        console.log(errMsg);
      }
    },

    async addReview(input, id) {
      console.log(input, id, "store");
      const { rating, content } = input;
      try {
        const { data } = await axios({
          method: "post",
          url: baseUrl + "shows/" + id + "/review",
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            rating,
            content,
          },
        });
        console.log(data);
        this.fetchAllReviews(id);
        this.router.push(`/shows/${id}/review`);
      } catch (error) {
        const errMsg = error.response.data.message;
        console.log(errMsg);
      }
    },

    async fetchQR() {
      try {
        const { data } = await axios({
          method: "get",
          url: baseUrl + "donate",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.qrCode = data.qrCode;
      } catch (error) {
        // const errMsg = error.response.data.message;
        console.log(error);
      }
    },
  },
});
