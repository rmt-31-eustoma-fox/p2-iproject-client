<script>
import { useCounterStore } from '../stores/counter'
import { mapWritableState, mapActions } from 'pinia'
import Card from "./Card.vue"
export default {
    components: {
        Card
    },
    methods: {
        ...mapActions(useCounterStore, ["fetchCities"])
    },
    computed: {
        ...mapWritableState(useCounterStore, ["cities"])
    },
    created() {
        this.fetchCities()
    }
}
</script>

<template>
    <div class="grid grid-cols-3 gap-6">
     <Card
       v-for="city in cities"
       :key="city.id"
       :city="city"
     />
   </div>
</template>