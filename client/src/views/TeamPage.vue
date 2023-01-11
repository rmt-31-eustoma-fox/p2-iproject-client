<script>
  import TeamList from "../components/TeamList.vue";
  import { mapActions, mapState } from "pinia";
  import { useTeamStore } from "../stores/team";

  export default {
    components: {
      TeamList,
    },
    computed: {
      ...mapState(useTeamStore, [
        "atlantic_Divisions",
        "central_Divisions",
        "northwest_Divisions",
        "pacific_Divisions",
        "southeast_Divisions",
        "southwest_Divisions",
      ]),
    },
    methods: {
      ...mapActions(useTeamStore, ["fetchAllTeams"]),
    },
    created() {
      this.fetchAllTeams();
    },
  };
</script>

<template>
  <div class="container my-5 border border-0 rounded bg-white p-3">
    <h5 class="h5 mb-3">
      <strong>All Teams</strong>
    </h5>

    <hr />

    <div class="d-flex flex-row justify-content-between flex-wrap">
      <div class="col-4 d-flex flex-column my-3">
        <h6 class="h6 text-center">
          <strong>ATLANTIC</strong>
        </h6>
        <TeamList :teams="atlantic_Divisions" />
      </div>
      <div class="col-4 d-flex flex-column my-3">
        <h6 class="h6 text-center">
          <strong>CENTRAL</strong>
        </h6>
        <TeamList :teams="central_Divisions" />
      </div>
      <div class="col-4 d-flex flex-column my-3">
        <h6 class="h6 text-center">
          <strong>NORTHWEST</strong>
        </h6>
        <TeamList :teams="northwest_Divisions" />
      </div>
      <div class="col-4 d-flex flex-column my-3">
        <h6 class="h6 text-center">
          <strong>PACIFIC</strong>
        </h6>
        <TeamList :teams="pacific_Divisions" />
      </div>
      <div class="col-4 d-flex flex-column my-3">
        <h6 class="h6 text-center">
          <strong>SOUTHEAST</strong>
        </h6>
        <TeamList :teams="southeast_Divisions" />
      </div>
      <div class="col-4 d-flex flex-column my-3">
        <h6 class="h6 text-center">
          <strong>SOUTHWEST</strong>
        </h6>
        <TeamList :teams="southwest_Divisions" />
      </div>
    </div>
  </div>
</template>
