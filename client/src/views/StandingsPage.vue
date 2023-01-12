<script>
  import { mapActions, mapState, mapWritableState } from "pinia";
  import SmallTable from "../components/SmallTable.vue";
  import { useStandingStore } from "../stores/standing";

  export default {
    components: {
      SmallTable,
    },
    computed: {
      ...mapState(useStandingStore, ["eastConference", "westConference"]),
    },
    methods: {
      ...mapActions(useStandingStore, ["getFullStandings"]),
    },
    created() {
      this.getFullStandings();
    },
  };
</script>

<template>
  <div class="container my-5">
    <form class="p-3 border border-0 rounded bg-white row">
      <h5 class="h5 mb-3">
        <strong>NBA 2022 Regular Season Standings</strong>
      </h5>
    </form>

    <SmallTable :title="'EAST CONFERENCE'" :teams="eastConference" />
    <SmallTable :title="'WEST CONFERENCE'" :teams="westConference" />
  </div>
</template>
