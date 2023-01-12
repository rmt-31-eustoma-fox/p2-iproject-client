<script>
  import { mapState, mapActions, mapWritableState } from "pinia";
  import PlayerTable from "../components/PlayerTable.vue";
  import { usePlayerStore } from "../stores/player";

  export default {
    components: {
      PlayerTable,
    },
    computed: {
      ...mapState(usePlayerStore, ["players"]),
      ...mapWritableState(usePlayerStore, ["searchPlayer"]),
    },
    methods: {
      ...mapActions(usePlayerStore, ["getPlayerBySearch"]),
    },
  };
</script>

<template>
  <div class="container mt-5" style="height: 85vh">
    <form
      class="p-3 border border-0 rounded bg-white"
      @submit.prevent="getPlayerBySearch"
    >
      <h5 class="h5 mb-3">
        <strong>Player Search</strong>
      </h5>
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          placeholder="Search Player by Name Here ..."
          v-model="searchPlayer"
        />
        <button class="btn btn-outline-danger" type="submit" id="button-addon2">
          Search
        </button>
      </div>
    </form>

    <div class="p-3 border border-0 rounded bg-white my-3">
      <PlayerTable :players="players" />
    </div>
  </div>
</template>
