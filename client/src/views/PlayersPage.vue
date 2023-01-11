<script>
  import PlayerTable from "../components/PlayerTable.vue";

  export default {
    components: {
      PlayerTable,
    },
    data() {
      return {
        players: [],
      };
    },
  };
</script>

<template>
  <div class="container mt-5" style="height: 85vh">
    <form class="p-3 border border-0 rounded bg-white">
      <h5 class="h5 mb-3">
        <strong>Player Search</strong>
      </h5>
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          placeholder="Search Player by Name Here ..."
        />
        <button class="btn btn-outline-danger" type="button" id="button-addon2">
          Search
        </button>
      </div>
    </form>

    <div class="p-3 border border-0 rounded bg-white my-3">
      <PlayerTable />
    </div>
  </div>
</template>
