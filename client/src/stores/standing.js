import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useStandingStore = defineStore("standing", {
  state: () => ({
    standings: [],
    baseUrl: "http://localhost:3001/",
    season: 2022,
  }),
  getters: {
    eastConference: (state) =>
      state.standings
        .filter((el) => el.conference.name === "east")
        .sort((a, b) => {
          return a.conference.rank - b.conference.rank;
        }),
    westConference: (state) =>
      state.standings
        .filter((el) => el.conference.name === "west")
        .sort((a, b) => {
          return a.conference.rank - b.conference.rank;
        }),
  },
  actions: {
    async getFullStandings() {
      try {
        let url = this.baseUrl + "standings?season=" + this.season;
        const { data } = await axios({
          method: "GET",
          url,
        });

        this.standings = data;
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
