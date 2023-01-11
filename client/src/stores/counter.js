import { defineStore } from "pinia";
import axios from "axios";

// const baseUrl = "http://localhost:3000";
const baseUrl = "https://valfave-api-production.up.railway.app";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    name: "Eduardo",
    agents: [],
    agentDetail: [],
    filter: "0",
    favorites: [],
    logged: false,
    leads: [],
    isLoading: false,
  }),

  getters: {
    doubleCount: (state) => state.count * 2,

    filterAgents(state) {
      if (state.filter == "0") return state.agents;

      return state.agents.filter((el) => el.role.displayName == state.filter);
    },
  },

  actions: {
    increment() {
      this.count++;
    },

    check() {
      if (localStorage.access_token) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    },

    enableLoading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },

    fetchAgents() {
      this.enableLoading();

      axios({
        url: baseUrl + "/agents",
        method: "get",
      })
        .then(({ data }) => {
          // console.log(data);
          this.agents = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    handleDetail(value) {
      // console.log(value);
      axios({
        url: baseUrl + `/agents/${value}`,
        method: "get",
      })
        .then(({ data }) => {
          // console.log(data.data.displayName);
          this.agentDetail = data.data;
          // console.log("-====================-");
          // console.log(this.agentDetail);
          this.router.push(`/detail/${value}`);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // handleSearch(value) {
    //   console.log(value);
    //   if (value) {
    //     const newData = this.agents.filter((el) => el.displayName == value);
    //     console.log(newData);
    //     return newData;
    //   }
    // },

    handleLogin(value) {
      axios({
        url: baseUrl + `/login`,
        method: "post",
        data: {
          email: value.email,
          password: value.password,
        },
      })
        .then(({ data }) => {
          // console.log(data);
          localStorage.access_token = data.access_token;
          this.check();
          this.router.push("/");
        })
        .catch((err) => {
          // console.log(err.response.data.message);
          Swal.fire({
            // position: "top-end",
            icon: "error",
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },

    handleAddToFav(value) {
      // console.log(value);

      axios({
        url: baseUrl + `/favorite/${value}`,
        method: "post",
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(({ data }) => {
          // console.log(data);
          Swal.fire({
            // position: "top-end",
            icon: "success",
            title: "Agent added to favorite!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.push("/");
        })
        .catch((err) => {
          // console.log(err.response.data.message);
          Swal.fire({
            // position: "top-end",
            icon: "error",
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },

    fetchFavorites() {
      this.enableLoading();
      axios({
        url: baseUrl + `/favorite`,
        method: "get",
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(({ data }) => {
          // console.log(data);
          this.favorites = data;
          // this.router.push("/");
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response.data.message);
        });
    },

    removeFav(value) {
      axios({
        url: baseUrl + `/favorite/${value}`,
        method: "delete",
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(({ data }) => {
          this.fetchFavorites();
          Swal.fire({
            // position: "top-end",
            icon: "success",
            title: "Agent removed from favorite!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response.data.message);
        });
    },

    handleRegister(value) {
      axios({
        url: baseUrl + `/register`,
        method: "post",
        data: {
          email: value.email,
          password: value.password,
        },
      })
        .then(({ data }) => {
          // console.log(data);
          Swal.fire({
            // position: "top-end",
            icon: "success",
            title: "Success create account, please login",
            showConfirmButton: false,
            timer: 1500,
          });
          // this.check();
          this.router.push("/login");
        })
        .catch((err) => {
          // console.log(err.response.data.message);
          Swal.fire({
            // position: "top-end",
            icon: "error",
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },

    callback(response) {
      // console.log(response);
      axios({
        method: "post",
        url: baseUrl + "/google-sign-in",
        headers: {
          "google-auth-token": response.credential,
        },
      })
        .then(({ data }) => {
          // console.log(data);
          localStorage.access_token = data.access_token;
          this.check();
          this.router.push("/");
        })
        .catch((err) => {
          // console.log(error);
          Swal.fire({
            // position: "top-end",
            icon: "error",
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },

    fetchLeaderboards() {
      this.enableLoading();

      axios({
        method: "get",
        url: baseUrl + "/leaderboard",
      })
        .then(({ data }) => {
          // console.log(data);
          this.leads = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
