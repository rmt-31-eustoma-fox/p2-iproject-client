<script>
import { useShowStore } from '../stores';
import { mapState, mapActions } from 'pinia';
import SideBar from '../components/SideBar.vue';
export default {
    components: {
        SideBar
    },
    computed: {
        ...mapState(useShowStore, ['qrCode'])
    },
    methods: {
        ...mapActions(useShowStore, ['fetchQR'])
    },
    created() {
        this.fetchQR();
    }
}
</script>

<template>
  <div
    class="grid grid-cols-2 grid-rows-2 bg-main-grey h-full"
    style="grid-template-columns: 320px auto; grid-template-rows: 80px auto"
  >
    <SideBar />
    <main
      class="bg-darker-grey flex flex-col px-28 justify-center row-span-2 fit-screen-height"
      style="height: 100vh; margin: auto 0"
      id="content"
    >
    <h1 class="text-center text-2xl">Support me on Trakteer!</h1>
    <img :src="qrCode" style="height: 400px; width: 400px; margin: 40px auto" />
    </main>
  </div>
</template>
