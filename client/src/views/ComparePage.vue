<script>
  import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from "chart.js";
  import { mapActions, mapState, mapWritableState } from "pinia";
  import { Radar } from "vue-chartjs";
  import { useCompareStore } from "../stores/compare";

  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  export default {
    computed: {
      ...mapState(useCompareStore, [
        "apg1",
        "apg2",
        "bpg1",
        "bpg2",
        "data1",
        "data2",
        "ppg1",
        "ppg2",
        "rpg1",
        "rpg2",
        "spg1",
        "spg2",
        "tpg1",
        "tpg2",
        "name1",
      ]),
      ...mapWritableState(useCompareStore, ["idInput1", "idInput2"]),
      chartData() {
        return {
          labels: ["PPG", "3PG", "RPG", "BPG", "APG", "SPG"],
          datasets: [
            {
              label: this.name1,
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(179,181,198,1)",
              pointBackgroundColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [
                this.ppg1,
                this.tpg1,
                this.rpg1,
                this.bpg1,
                this.apg1,
                this.spg1,
              ],
            },
            {
              label: this.name2,
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: [
                this.ppg2,
                this.tpg2,
                this.rpg2,
                this.bpg2,
                this.apg2,
                this.spg2,
              ],
            },
          ],
        };
      },
    },
    components: {
      Radar,
    },
    methods: {
      ...mapActions(useCompareStore, ["getData1", "getData2"]),
      handleSubmit() {
        this.getData1(this.idInput1);
        this.getData2(this.idInput2);
      },
    },
    created() {
      this.getData1(this.idInput1);
      this.getData2(this.idInput2);
    },
  };
</script>

<template>
  <div class="container mt-5">
    <form
      class="p-3 border border-0 rounded bg-white row"
      @submit.prevent="handleSubmit"
    >
      <h5 class="h5 mb-3">
        <strong>NBA PLAYER COMPARISON 2022 Regular Season</strong>
      </h5>
      <div class="col-2">
        <span>ID1</span>
        <input
          v-model="idInput1"
          class="form-control"
          type="number"
          placeholder="ID"
        />
      </div>
      <div class="col-2">
        <span>ID2</span>
        <input
          v-model="idInput2"
          class="form-control"
          type="number"
          placeholder="ID"
        />
      </div>

      <input
        class="btn btn-outline-primary mx-3 my-3"
        type="submit"
        value="Compare"
      />
    </form>

    <div class="border border-0 rounded bg-white row my-3">
      <Radar
        class="w-50 h-50 mx-auto"
        :options="{ responsive: true, maintainAspectRatio: true }"
        :data="chartData"
      />
    </div>
  </div>
</template>
