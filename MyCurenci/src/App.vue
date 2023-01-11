<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { mapActions, mapState } from 'pinia';
import { useRootStore } from './stores';
export default {
  components : {
    Navbar
  },
  computed : {
    ...mapState(useRootStore,['theValue'])
  },
  methods : {
    ...mapActions(useRootStore,['fetchCurrenciesList','dummyFetchForex','fetchForexPair','fetchNews','fetchLatestExc'])
  },
  created(){
    this.fetchCurrenciesList()
    this.fetchLatestExc()
    // this.dummyFetchForex()
    // this.fetchForexPair()
    // this.fetchNews()
  },
  unmounted(){
    if(this.theValue.length > 0){
      this.theValue = []
    }
  }
}
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <Navbar />
  <RouterView />
</template>
