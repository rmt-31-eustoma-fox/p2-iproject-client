<script>
  import { RouterLink } from "vue-router";

  export default {
    props: ["players"],
  };
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Player</th>
        <th scope="col">Position</th>
        <th scope="col" class="text-end">Height</th>
        <th scope="col">Weight</th>
        <th scope="col" class="text-end">Last Attended</th>
        <th scope="col">Country</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="players.length >= 1" v-for="player in players" :key="player.id">
        <td>
          <img
            src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
            style="width: 30px"
            class="rounded-pill"
          />
          <RouterLink :to="{ name: 'playerDetail', params: { id: player.id } }">
            <span class="mx-3">{{
              player.firstname + " " + player.lastname
            }}</span>
          </RouterLink>
        </td>
        <td>F</td>
        <td class="text-end">
          {{ player.height.feets + "-" + player.height.inches }}
        </td>
        <td>{{ player.weight.pounds }} lbs</td>
        <td class="text-end">{{ player.college }}</td>
        <td>{{ player.birth.country }}</td>
      </tr>
    </tbody>
  </table>
</template>
