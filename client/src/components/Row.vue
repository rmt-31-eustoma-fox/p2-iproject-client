<script>
export default {
  props: ["item"],
};
</script>

<template>
  <tr>
    <th scope="row">{{ item.leaderboardRank }}</th>
    <td>{{ item.gameName }}</td>
    <td># {{ item.tagLine }}</td>
    <td>{{ item.rankedRating }}</td>
    <td>{{ item.numberOfWins }}</td>
  </tr>
</template>
