<script>
  import SmallTable from "../components/SmallTable.vue";

  export default {
    components: {
      SmallTable,
    },
  };
</script>

<template>
  <div class="container my-5">
    <form class="p-3 border border-0 rounded bg-white row">
      <h5 class="h5 mb-3">
        <strong>NBA 2022 Regular Season Standings</strong>
      </h5>
      <div class="col-2">
        <span>Seasons</span>
        <select class="form-select" aria-label="Default select example">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <div class="col-2">
        <span>Group By</span>
        <select class="form-select" aria-label="Default select example">
          <option value="conference">Conference</option>
          <option value="division">Division</option>
        </select>
      </div>
    </form>

    <SmallTable />
  </div>
</template>
