import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    players: [],
    player: {},
    statistics: [],
    searchPlayer: "",
    baseUrl: "https://nbaseken-production.up.railway.app/",
    // baseUrl: "http://localhost:3000/",
  }),
  getters: {
    points: (state) =>
      (
        state.statistics.reduce((a, b) => {
          return a + b.points;
        }, 0) / state.statistics.length
      ).toFixed(1),
    fgp: (state) =>
      (
        state.statistics.reduce((a, b) => {
          return a + Math.floor(b.fgp);
        }, 0) / state.statistics.length
      ).toFixed(1),
    ftp: (state) =>
      (
        state.statistics.reduce((a, b) => {
          return a + Math.floor(b.ftp);
        }, 0) / state.statistics.length
      ).toFixed(1),
    tpp: (state) =>
      (
        state.statistics.reduce((a, b) => {
          return a + Math.floor(b.tpp);
        }, 0) / state.statistics.length
      ).toFixed(1),
    treb: (state) =>
      (
        state.statistics.reduce((a, b) => {
          return a + Math.floor(b.totReb);
        }, 0) / state.statistics.length
      ).toFixed(1),
    ast: (state) =>
      (
        state.statistics.reduce((a, b) => {
          return a + Math.floor(b.assists);
        }, 0) / state.statistics.length
      ).toFixed(1),
    blk: (state) =>
      (
        state.statistics.reduce((a, b) => {
          return a + Math.floor(b.blocks);
        }, 0) / state.statistics.length
      ).toFixed(1),
    pf: (state) =>
      (
        state.statistics.reduce((a, b) => {
          return a + Math.floor(b.pFouls);
        }, 0) / state.statistics.length
      ).toFixed(1),
    fullname: (state) => state.player.firstname + " " + state.player.lastname,
    pos: (state) => state.player.leagues.standard.pos,
    weight: (state) => state.player.weight.pounds + "lbs",
    height: (state) => state.player.height.meters + "m",
    teamName: (state) => state.statistics[0].team.name,
    teamCode: (state) => state.statistics[0].team.code,
    teamId: (state) => state.statistics[0].team.id,
    teamLogo: (state) => state.statistics[0].team.logo,
  },
  actions: {
    async getPlayerBySearch() {
      let url = this.baseUrl + "players?search=" + this.searchPlayer;
      try {
        const { data } = await axios({
          method: "GET",
          url,
        });

        this.players = data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.message,
        });
      }
    },

    async getPlayerById(id) {
      let url = this.baseUrl + "players?id=" + id;
      try {
        const { data } = await axios({
          method: "GET",
          url,
        });

        this.player = data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.message,
        });
      }
    },

    async getPlayerStats(id) {
      let url = this.baseUrl + "players/" + id;
      try {
        const { data } = await axios({
          method: "GET",
          url,
        });

        this.statistics = data;
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
