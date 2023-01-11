<script>
  import { mapActions, mapState } from "pinia";
  import { usePlayerStore } from "../stores/player";

  export default {
    computed: {
      ...mapState(usePlayerStore, [
        "player",
        "tpp",
        "ast",
        "blk",
        "fgp",
        "ftp",
        "pf",
        "points",
        "treb",
        "fullname",
        "pos",
        "weight",
        "height",
        "teamName",
        "teamLogo",
        "teamId",
        "teamCode",
      ]),
    },
    methods: {
      ...mapActions(usePlayerStore, ["getPlayerStats", "getPlayerById"]),
    },
    created() {
      this.getPlayerStats(+this.$route.params.id);
      this.getPlayerById(+this.$route.params.id);
    },
  };
</script>

<template>
  <div class="container my-5">
    <div class="border border-0 rounded p-5 bg-white">
      <div class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <img
            src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
            style="width: 150px"
            class="rounded-pill"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <h5 class="h5">{{ fullname }}</h5>
          <h3 class="h3">
            <strong>#{{ player.id }}</strong
            >-PlayerID
          </h3>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <img :src="teamLogo" style="width: 150px" class="rounded-pill" />
        </div>
        <div class="flex-grow-1 ms-3">
          <h5 class="h5">{{ teamName }}</h5>
          <h3 class="h3">
            <strong>{{ teamCode }}</strong>
          </h3>
          <h3 class="h3">
            <strong>#{{ teamId }}</strong
            >-TeamID
          </h3>
        </div>
      </div>
      <table class="table my-5">
        <thead>
          <tr>
            <th
              style="vertical-align: middle"
              colspan="6"
              class="col-12 text-center bg-danger text-white"
            >
              PROFILE
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center col-2">POSITION <br />{{ pos }}</td>
            <td class="text-center col-2">
              BIRTHDATE <br />{{ player.birth.date }}
            </td>
            <td class="text-center col-2">HEIGHT <br />{{ weight }}</td>
            <td class="text-center col-2">WEIGHT <br />{{ height }}</td>
            <td class="text-center col-2">
              LAST ATTENDED <br />{{ player.college }}
            </td>
            <td class="text-center col-2">
              COUNTRY <br />{{ player.birth.country }}
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table my-5">
        <thead>
          <tr>
            <th
              style="vertical-align: middle"
              class="text-center bg-danger text-white"
              colspan="18"
            >
              Statistics
            </th>
          </tr>
          <tr>
            <th class="text-center">POINTS</th>
            <th class="text-center">FGP</th>
            <th class="text-center">FTP</th>
            <th class="text-center">3PP</th>
            <th class="text-center">TREB</th>
            <th class="text-center">AST</th>
            <th class="text-center">BLK</th>
            <th class="text-center">PF</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">{{ points }}</td>
            <td class="text-center">{{ fgp }}</td>
            <td class="text-center">{{ ftp }}</td>
            <td class="text-center">{{ tpp }}</td>
            <td class="text-center">{{ treb }}</td>
            <td class="text-center">{{ ast }}</td>
            <td class="text-center">{{ blk }}</td>
            <td class="text-center">{{ pf }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
