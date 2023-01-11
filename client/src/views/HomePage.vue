<script>
  import SmallTable from "../components/SmallTable.vue";
  import SmallMatches from "../components/SmallMatches.vue";

  export default {
    components: {
      SmallTable,
      SmallMatches,
    },
  };
</script>

<template>
  <div class="container">
    <div class="row w-100">
      <div class="col-6">
        <SmallTable class="my-5" />
      </div>

      <div class="col-6">
        <SmallMatches class="my-5" />
      </div>
    </div>
  </div>
</template>

<style scped>
  .big-head {
    font-size: 2rem;
  }
</style>
