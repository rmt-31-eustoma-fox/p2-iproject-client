<script>
import { useShowStore } from '../stores';
import { mapActions } from 'pinia';
export default {
  methods: {
    ...mapActions(useShowStore, ['handleLogout'])
  }
}
</script>

<template>
  <div
    class="flex flex-col justify-around row-span-2 px-15 gap-10 pb-10 bg-main-green"
    style="height: 100vh;"
  >
    <img src="../assets/glosseries-logo.png" style="width: 280px" />
    <div class="sidebar-menu">
      <h2>Welcome, Rheza!</h2>
    </div>
    <div class="sidebar-menu flex flex-col gap-3 text-xl">
      <a><router-link to="/">Home</router-link></a>
      <a><router-link to="/browse">Browse Series</router-link></a>
      <a><router-link to="/list">Your List</router-link></a>
    </div>
    <div class="mt-32 sidebar-menu text-xl">
      <a @click.prevent="handleLogout">Logout</a>
    </div>
  </div>
</template>
