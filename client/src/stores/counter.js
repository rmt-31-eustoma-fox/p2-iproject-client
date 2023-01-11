import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    name: "Eduardo",
    agents: [],
    agentDetail: [],
    filter: "0",
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

    fetchAgents() {
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
  },
});
