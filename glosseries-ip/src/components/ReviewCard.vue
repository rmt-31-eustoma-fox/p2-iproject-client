<script>
export default {
  props: ["review"],
};
</script>

<template>
  <div
    class="flex flex-col bg-white border-darker-green border-2 rounded-2xl py-4 px-8 gap-2"
    id="review-card"
  >
    <!-- <h1 class="font-bold">{{review.User.username}}</h1> -->
    <!-- <div class="flex">
      <i class="fas fa-star checked"></i>
      <i class="fas fa-star checked"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div> -->
    <h1 class="text-center">{{review.rating}}/5</h1>
    <h1 class="text-center" style="font-style: italic">"{{review.content}}"</h1>
  </div>
</template>
