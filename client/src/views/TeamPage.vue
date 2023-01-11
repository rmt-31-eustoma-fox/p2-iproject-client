<script>
  import TeamList from "../components/TeamList.vue";

  export default {
    components: {
      TeamList,
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
          <strong>All Teams</strong>
        </h6>
        <TeamList />
      </div>
    </div>
  </div>
</template>
