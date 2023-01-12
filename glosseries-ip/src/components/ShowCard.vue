<script>
import { useShowStore } from "../stores";
import { mapActions } from "pinia";
export default {
  props: ["show", "condition"],
  methods: {
    ...mapActions(useShowStore, [
      "updateWatch",
      "updateUnwatch",
      "fetchShowDetail",
    ]),
    directToDetail(id) {
      this.fetchShowDetail(id);
      this.$router.push(`shows/${id}`);
    },
  },
  computed: {
    showObj() {
      return this.show[0];
    },
  },
};
</script>

<template>
  <!-- {{ JSON.stringify(this.showObj) }} -->
  <div
    class="flex flex-col items-center rounded-md shadow-sm hover:scale-110 hover:ease-in bg-main-grey px-4 py-2"
    style="position: relative"
    id="card"
    @click="directToDetail(show.id)"
  >
    <img
      :src="show.image_thumbnail_path"
      class="w-auto pt-2"
      style="height: 150px; width: auto"
    />
    <p class="text-sm">{{ show.name }}</p>

    <button
      class="text-sm w-4/5 bg-darker-green py-1 px-2 rounded-md"
      style="position: absolute; top: 1px; left: 0"
      v-if="this.$route.name == 'list' && this.condition == 'unwatched'"
      @click="updateWatch(show.id)"
    >
      ➕ Watch
    </button>
    <button
      class="text-sm w-4/5 bg-darker-green py-1 px-2 rounded-md"
      style="position: absolute; top: 1px; left: 0"
      v-if="this.$route.name == 'list' && this.condition == 'watched'"
      @click="updateUnwatch(show.id)"
    >
      ➖ Unwatch
    </button>
  </div>
</template>
