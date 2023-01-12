import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useCompareStore = defineStore("compare", {
  state: () => ({
    data1: {},
    data2: {},
    idInput1: 124,
    idInput2: 153,
    baseUrl: "https://nbaseken-production.up.railway.app/",
    // baseUrl: "http://localhost:3000/",
  }),
  getters: {
    name1: (state) =>
      state.data1
        ? `${state.data1[0].player.firstname} ${state.data1[0].player.lastname}`
        : "",
    name2: (state) =>
      state.data2
        ? `${state.data2[0].player.firstname} ${state.data2[0].player.lastname}`
        : "",
    ppg1: (state) =>
      (
        state.data1.reduce((a, b) => {
          return a + b.points;
        }, 0) / state.data1.length
      ).toFixed(1),
    ppg2: (state) =>
      (
        state.data2.reduce((a, b) => {
          return a + b.points;
        }, 0) / state.data2.length
      ).toFixed(1),
    tpg1: (state) =>
      (
        state.data1.reduce((a, b) => {
          return a + Math.floor(b.tpp);
        }, 0) / state.data1.length
      ).toFixed(1),
    tpg2: (state) =>
      (
        state.data2.reduce((a, b) => {
          return a + Math.floor(b.tpp);
        }, 0) / state.data2.length
      ).toFixed(1),
    rpg1: (state) =>
      (
        state.data1.reduce((a, b) => {
          return a + Math.floor(b.totReb);
        }, 0) / state.data1.length
      ).toFixed(1),
    rpg2: (state) =>
      (
        state.data2.reduce((a, b) => {
          return a + Math.floor(b.totReb);
        }, 0) / state.data2.length
      ).toFixed(1),
    bpg1: (state) =>
      (
        state.data1.reduce((a, b) => {
          return a + Math.floor(b.blocks);
        }, 0) / state.data1.length
      ).toFixed(1),
    bpg2: (state) =>
      (
        state.data2.reduce((a, b) => {
          return a + Math.floor(b.blocks);
        }, 0) / state.data2.length
      ).toFixed(1),
    apg1: (state) =>
      (
        state.data1.reduce((a, b) => {
          return a + Math.floor(b.assists);
        }, 0) / state.data1.length
      ).toFixed(1),
    apg2: (state) =>
      (
        state.data2.reduce((a, b) => {
          return a + Math.floor(b.assists);
        }, 0) / state.data2.length
      ).toFixed(1),
    spg1: (state) =>
      (
        state.data1.reduce((a, b) => {
          return a + Math.floor(b.steals);
        }, 0) / state.data1.length
      ).toFixed(1),
    spg2: (state) =>
      (
        state.data2.reduce((a, b) => {
          return a + Math.floor(b.steals);
        }, 0) / state.data2.length
      ).toFixed(1),
  },
  actions: {
    async getData1() {
      let url = this.baseUrl + "players/" + this.idInput1;
      try {
        if (this.idInput1 < 1) throw { name: "id_required" };
        const { data } = await axios({
          method: "GET",
          url,
        });

        this.data1 = data;
      } catch (error) {
        let message = "Id is required";
        if (error.name !== "id_required") message = error.response.data.message;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: message,
        });
      }
    },
    async getData2() {
      let url = this.baseUrl + "players/" + this.idInput2;
      try {
        if (this.idInput2 < 1) throw { name: "id_required" };
        const { data } = await axios({
          method: "GET",
          url,
        });

        this.data2 = data;
      } catch (error) {
        let message = "Id is required";
        if (error.name !== "id_required") message = error.response.data.message;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: message,
        });
      }
    },
  },
});
