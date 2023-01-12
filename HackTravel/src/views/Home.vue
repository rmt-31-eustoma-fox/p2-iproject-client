<script>
import { useCounterStore } from '../stores/counter'
import { mapWritableState, mapActions } from 'pinia'
import CityList from "../components/CityList.vue"

export default {
  components: {
    CityList
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchCities"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["cities"])
  },
  created() {
    this.fetchCities()
  },
}
</script>

<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
        <div class="container grid grid-cols-5 gap-6 pt-10 pb-16 items-start mx-auto">
            <div class="col-span-3 col-start-2">
                <CityList/>
            </div>
        </div>
    </div>
</template>