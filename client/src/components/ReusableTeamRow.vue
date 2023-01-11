<script>
  import { RouterLink } from "vue-router";
  export default {
    props: ["team"],
  };
</script>

<template>
  <li class="row my-3">
    <div class="col-3">
      <img :src="team.logo" style="width: 64px" />
    </div>
    <div class="col-6">
      <RouterLink
        style="text-decoration: none"
        :to="{
          name: 'teamDetail',
          params: { teamName: team.code, id: team.id },
        }"
      >
        <p>{{ team.name }}</p>
        <strong>{{ team.code }}</strong>
      </RouterLink>
    </div>
  </li>
</template>
