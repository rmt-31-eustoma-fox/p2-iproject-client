<script >
import { mapActions, mapState } from 'pinia';
import Card from '../components/Card.vue'
import { useCounterStore } from '../stores/counter';

export default {
  components: {
    Card
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchProduct'])
  },
  computed: {
    ...mapState(useCounterStore, ['products'])
  },
  created(){
    this.fetchProduct()
  }

}
</script>

<template>
  
<div class="container my-12 items-center justify-center pt-20 mx-auto px-4 md:px-12">
  <div class="flex items-center flex-wrap -mx-1 lg:-mx-4">

    <Card v-for="product in products" :key="product.id" :product="product"/>

  </div>
</div>
</template>
