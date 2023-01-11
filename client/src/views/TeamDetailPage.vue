<script>
  import { mapActions, mapState } from "pinia";
  import { useTeamStore } from "../stores/team";
  import PlayerTable from "../components/PlayerTable.vue";

  export default {
    components: {
      PlayerTable,
    },
    computed: {
      ...mapState(useTeamStore, ["team"]),
    },
    methods: {
      ...mapActions(useTeamStore, [
        "fetchById",
        "fetchTeamStatistics",
        "fetchPlayerList",
      ]),
    },
    created() {
      this.fetchById(+this.$route.params.id);
      this.fetchTeamStatistics(+this.$route.params.id);
      this.fetchPlayerList(+this.$route.params.id);
    },
  };
</script>

<template>
  <div class="container mt-5" style="height: 85vh">
    <div class="border border-0 rounded p-5 bg-white">
      <div class="d-flex">
        <div class="flex-shrink-0">
          <img :src="team.logo" style="width: 150px" />
        </div>
        <div class="ms-3">
          <h5 class="h5">{{ team.name }}</h5>
          <h3 class="h3">
            <strong>{{ team.code }}</strong>
          </h3>
          <h3 class="h3">
            <strong>#{{ team.id }}</strong
            >-TeamID
          </h3>
        </div>
        <div class="flex-grow-1 ms-3">
          <span>Conference</span>
          <h3 class="h3">
            {{ team.leagues ? team.leagues.standard.conference : "" }}
          </h3>
          <span>Division</span>
          <h3 class="h3">
            {{ team.leagues ? team.leagues.standard.division : "" }}
          </h3>
        </div>
      </div>

      <table class="table my-5">
        <thead>
          <tr>
            <th
              style="vertical-align: middle"
              colspan="7"
              class="col-12 text-center bg-danger text-white"
            >
              PERFORMANCE
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">
              GAMES <br />{{ team.statistics ? team.statistics.games : "" }}
            </td>
            <td class="text-center">
              PPG <br />{{
                (team.statistics
                  ? team.statistics.points / team.statistics.games
                  : ""
                ).toFixed(1)
              }}
            </td>
            <td class="text-center">
              APG <br />{{
                (team.statistics
                  ? team.statistics.assists / team.statistics.games
                  : ""
                ).toFixed(1)
              }}
            </td>
            <td class="text-center">
              RPG <br />{{
                (team.statistics
                  ? team.statistics.totReb / team.statistics.games
                  : ""
                ).toFixed(1)
              }}
            </td>
            <td class="text-center">
              PFPG <br />{{
                (team.statistics
                  ? team.statistics.pFouls / team.statistics.games
                  : ""
                ).toFixed(1)
              }}
            </td>
            <td class="text-center">
              SPG <br />{{
                (team.statistics
                  ? team.statistics.steals / team.statistics.games
                  : ""
                ).toFixed(1)
              }}
            </td>
            <td class="text-center">
              BPG <br />{{
                (team.statistics
                  ? team.statistics.blocks / team.statistics.games
                  : ""
                ).toFixed(1)
              }}
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <h5 class="h5 my-3">PLAYER LIST</h5>
        <PlayerTable :players="team.players" />
      </div>
    </div>
  </div>
</template>
