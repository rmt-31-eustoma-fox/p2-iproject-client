import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useGameStore = defineStore("game", {
  state: () => ({
    games: [],
    baseUrl: "http://localhost:3001/games",
  }),
  getters: {},
  actions: {
    async getTodayMatches() {
      try {
        const { data } = await axios({
          method: "GET",
          url: this.baseUrl,
        });

        this.games = data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.message,
        });
      }
    },
  },
});
