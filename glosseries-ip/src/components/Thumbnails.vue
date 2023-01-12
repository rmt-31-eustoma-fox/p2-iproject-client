<script>
export default {
  props: ["image"],
};
</script>

<template>
  <img :src="image" class="rounded-lg" style="width: 250px; height: 150px" />
</template>
