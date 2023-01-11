import { defineStore } from "pinia";
import axios from "axios";

export const useTeamStore = defineStore("team", {
  state: () => ({
    baseUrl: "http://localhost:3001/",
    teams: [],
    team: {},
  }),
  getters: {
    east_Conference: (state) =>
      state.teams.filter((el) => el.leagues.standard.conference === "East"),
    west_Conference: (state) =>
      state.teams.filter((el) => el.leagues.standard.conference === "West"),
    atlantic_Divisions: (state) =>
      state.teams.filter((el) => el.leagues.standard.division === "Atlantic"),
    central_Divisions: (state) =>
      state.teams.filter((el) => el.leagues.standard.division === "Central"),
    northwest_Divisions: (state) =>
      state.teams.filter((el) => el.leagues.standard.division === "Northwest"),
    pacific_Divisions: (state) =>
      state.teams.filter((el) => el.leagues.standard.division === "Pacific"),
    southeast_Divisions: (state) =>
      state.teams.filter((el) => el.leagues.standard.division === "Southeast"),
    southwest_Divisions: (state) =>
      state.teams.filter((el) => el.leagues.standard.division === "Southwest"),
  },
  actions: {
    async fetchAllTeams() {
      try {
        const { data } = await axios({
          method: "GET",
          url: this.baseUrl + "teams",
          timeout: 2000,
        });

        this.teams = data;
      } catch (error) {
        const { data } = error.response;
        console.log(data.message);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: data.message,
        // });
      }
    },
    async fetchById(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: this.baseUrl + "teams?id=" + id,
          timeout: 2000,
        });

        this.team = data;
      } catch (error) {
        const { data } = error.response;
        console.log(data.message);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: data.message,
        // });
      }
    },
    async fetchTeamStatistics(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: this.baseUrl + "teams/" + id,
          timeout: 2000,
        });

        this.team.statistics = data;
      } catch (error) {
        const { data } = error.response;
        console.log(data.message);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: data.message,
        // });
      }
    },
    async fetchPlayerList(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: this.baseUrl + "players?team=" + id,
          timeout: 2000,
        });

        this.team.players = data;
      } catch (error) {
        const { data } = error.response;
        console.log(data.message);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: data.message,
        // });
      }
    },
  },
});
