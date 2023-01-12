<script>
import { useShowStore } from '../stores';
import { mapActions } from 'pinia';
export default {
  props: ["show"],
  methods: {
    ...mapActions(useShowStore, ['fetchShowDetail']),
    directToDetail(id){
      this.fetchShowDetail(id);
      this.$router.push(`shows/${id}`)
    }
  }
};
</script>

<template>
  <div
    class="flex flex-col items-center rounded-md shadow-sm hover:scale-110 hover:ease-in bg-main-grey"
    id="card"
    @click="directToDetail(show.id)"
  >
    <img
      :src="show.image_thumbnail_path"
      class="w-auto pt-2"
      style="height: 150px; width: auto"
    />
    <p class="text-sm text-center">{{ show.name }}</p>
  </div>
</template>
