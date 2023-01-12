<script>
  import { mapActions, mapState } from "pinia";
  import { useGameStore } from "../stores/game";

  export default {
    computed: {
      ...mapState(useGameStore, ["games"]),
    },
    methods: {
      ...mapActions(useGameStore, ["getTodayMatches"]),
    },
    created() {
      this.getTodayMatches();
    },
  };
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th class="p-2 text-center big-head table-danger" scope="col">
          Today Matches
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="game in games" :key="game.id">
        <td class="p-2 text-center table-warning" scope="row">
          <span class="px-2">{{ game.teams.home.code }}</span>
          <img :src="game.teams.home.logo" style="height: 48px" class="px-2" />
          <span class="px-2"
            >{{ game.scores.home.points || 0 }} :
            {{ game.scores.visitors.points || 0 }}</span
          >
          <img
            :src="game.teams.visitors.logo"
            style="height: 48px"
            class="px-2"
          />
          <span class="px-2">{{ game.teams.visitors.code }}</span>
          <br />
          <span>Status: {{ game.status.long }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
