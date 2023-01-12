<script>
  import { RouterLink, RouterView } from "vue-router";

  export default {
    props: ["title", "teams"],
  };
</script>

<template>
  <div class="p-3 border border-0 rounded bg-white row my-3">
    <h5 class="h5">{{ title }}</h5>
    <table class="table">
      <thead>
        <tr>
          <th class="p-2" scope="col">TEAM</th>
          <th class="p-2 text-center" scope="col">W</th>
          <th class="p-2 text-center" scope="col">L</th>
          <th class="p-2 text-center" scope="col">LAST 10</th>
          <th class="p-2 text-center" scope="col">STREAK</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(team, idx) in teams" :key="team.id">
          <td class="p-2" scope="row">
            {{ ++idx }}
            <img :src="team.team.logo" style="height: 24px; padding: 0 10px" />
            <RouterLink
              :to="{
                name: 'teamDetail',
                params: { id: team.team.id, teamName: team.team.name },
              }"
            >
              {{ team.team.name }}
            </RouterLink>
          </td>
          <td class="p-2 text-center" scope="row">{{ team.win.total }}</td>
          <td class="p-2 text-center" scope="row">{{ team.loss.total }}</td>
          <td class="p-2 text-center" scope="row">
            {{ team.win.lastTen }}-{{ team.loss.lastTen }}
          </td>
          <td class="p-2 text-center" scope="row">
            {{ team.winStreak ? "W" : "L" }}{{ team.streak }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
