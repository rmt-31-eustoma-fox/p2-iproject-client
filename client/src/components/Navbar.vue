<script>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
    <div class="container">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <RouterLink class="navbar-brand" to="/">NBA<sup>2nd</sup></RouterLink>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/standings">Standings</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/teams">Teams</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/players">Players</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/compare">Compare</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
