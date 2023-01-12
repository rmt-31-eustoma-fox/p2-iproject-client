<script>
  import ReusableRow from "../components/ReusableTeamRow.vue";

  export default {
    props: ["teams"],
    components: {
      ReusableRow,
    },
  };
</script>

<template>
  <ul style="list-style: none">
    <ReusableRow v-for="team in teams" :key="team.id" :team="team" />
  </ul>
</template>
