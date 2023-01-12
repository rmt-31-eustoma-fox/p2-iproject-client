<script>
import { useCounterStore } from '../stores/counter'
import { mapWritableState, mapActions } from 'pinia'
import Card from "../components/Card.vue"

export default {
  components: {
    Card
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchAccomodationByCity"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["accomodations"])
  },
  created() {
    this.fetchAccomodationByCity(this.$route.params.CityId)
  },
}
</script>

<template>
    <div class="grid grid-cols-3 gap-6">
     <Card
       v-for="accomodation in accomodations"
       :key="accomodation.id"
       :accomodation="accomodation"
     />
   </div>
</template>