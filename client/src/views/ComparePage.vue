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
  import { Radar } from "vue-chartjs";

  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  export default {
    components: {
      Radar,
    },
    data() {
      return {
        player1: {
          player: {
            id: 124,
            firstname: "Stephen",
            lastname: "Curry",
          },
          team: {
            id: 11,
            name: "Golden State Warriors",
            nickname: "Warriors",
            code: "GSW",
            logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Warriors_de_Golden_State_logo.svg/1200px-Warriors_de_Golden_State_logo.svg.png",
          },
          game: {
            id: 10983,
          },
          points: 17,
          pos: "PG",
          min: "16:58",
          fgm: 7,
          fga: 13,
          fgp: "53.8",
          ftm: 0,
          fta: 0,
          ftp: "0.0",
          tpm: 3,
          tpa: 8,
          tpp: "37.5",
          offReb: 0,
          defReb: 5,
          totReb: 5,
          assists: 2,
          pFouls: 1,
          steals: 0,
          turnovers: 4,
          blocks: 1,
          plusMinus: "-2",
          comment: null,
        },
        chartData: {
          labels: ["PPG", "3PG", "RPG", "BPG", "APG", "SPG"],
          datasets: [
            {
              label: "Stephen Curry",
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(179,181,198,1)",
              pointBackgroundColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [6.5, 5.9, 9.0, 8.1, 5.6, 5.5],
            },
            {
              label: "Kevin Durant",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: [2.8, 4.8, 4.0, 1.9, 9.6, 10],
            },
          ],
        },
      };
    },
  };
</script>

<template>
  <div class="container mt-5">
    <form class="p-3 border border-0 rounded bg-white row">
      <h5 class="h5 mb-3">
        <strong>NBA 2022 Regular Season Standings</strong>
      </h5>
      <div class="col-2">
        <span>Compare</span>
        <select class="form-select" aria-label="Default select example">
          <option value="team">Team</option>
          <option value="player">Player</option>
        </select>
      </div>
      <div class="col-2">
        <span>ID1</span>
        <input class="form-control" type="number" placeholder="ID" />
      </div>
      <div class="col-2">
        <span>ID2</span>
        <input class="form-control" type="number" placeholder="ID" />
      </div>

      <input
        class="btn btn-outline-primary mx-3 my-3"
        type="button"
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
