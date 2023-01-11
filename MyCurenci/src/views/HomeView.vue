<script>
import { mapState, mapActions, mapWritableState } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import { useRootStore } from '../stores';
import PairSymbol from '../components/PairSymbol.vue'
import CurrencyCardContainer from '../components/CurrencyCardContainer.vue'
import Loading from '../components/Loading.vue'

export default {
  components: {
    PairSymbol, CurrencyCardContainer, Loading
  },
  computed: {
    ...mapState(useRootStore, ['currencies', 'theValue','theForexPair','exchangeValue','isLoading']),
    ...mapWritableState(useRootStore,['baseCurrency','quoteCurrency','isInTitleStage']),
    localGetQuery(){
      return this.$route.query.exc
    },
    localRouteName(){
      return this.$route.name
    }
  },
  methods: {
    ...mapActions(useRootStore, ['fetchForexPair', 'fetchNews','fetchLatestExc']),
    mainFetcher(){
      if(this.localGetQuery && this.localGetQuery.length > 4) {
        [this.baseCurrency,this.quoteCurrency] = this.localGetQuery.split('/')
        // console.log(this.$route.name)
        if(this.localRouteName === 'news') {
          this.fetchNews()
        } else if (this.localRouteName === 'graph'){
          this.fetchForexPair()
        }
      } else {
        // console.log('gagal fetch news and graph news return to home')
        this.$router.push({ name: 'dummy' })
      }
    }
  },
  created() {
    
    console.log(this.$route.query.exc, '<<< created HomeView')
    this.mainFetcher()
    // const { exc } = this.$route.query
    if(this.localGetQuery) this.baseCurrency = this.localGetQuery.split('/')[0]
    // console.log(this.theForexPair)
  },
  watch:{
    quoteCurrency:{
      handler(newValue, oldValue){
        // console.log({newValue, oldValue}, '<<< watcher quotecurrency homeview')
        // console.log(this.theForexPair, '<<< Watcher Homeview')
        // this.mainFetcher()
        if(this.localRouteName === 'news') {
          this.fetchNews()
        } else if (this.localRouteName === 'graph'){
          this.fetchForexPair()
        } else {
          this.fetchNews()
        }
      }
    },
    theForexPair:{
      handler(){
        // console.log(this.theForexPair, '<<< Watcher theforexpair')
        // this.mainFetcher()
      }
    },
    baseCurrency:{
      handler(){
        this.fetchLatestExc()
      }
    }
  },
  mounted(){
    this.isInTitleStage = false
    // console.log('HomeView Mounted')
  }
}
</script>

<template>
  <div class="container" style="margin-top: 50px;">
    <div class="row">
      <div class="col-3">
        <h2 class="mt-2">Search</h2>
      </div>
      <div class="col-6">
        <h2 class="mt-2"></h2>
      </div>
      <div class="col-3">
        <h2 class="mt-2">Exchange Rate</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-9">
        <div class="row">
          <PairSymbol />
        </div>
        <div class="row">
          <div class="col">
            <!-- <h2 class="mt-2" v-if="$route.name === 'graph'">Graph of {{ theForexPair }}</h2> -->
            <!-- <p> {{  }}</p> -->
          </div>
        </div>
        <div class="row">
          <div class="col">
            <!-- <Graph :type="'candlestick'" :autosize="true" :data="theValue" :chartOptions="chartProperties" /> -->
            <!-- <RouterView /> -->
            <router-view />
          </div>
        </div>
      </div>
      <div class="col-3">
        <div style="text-align: center; ">
          <CurrencyCardContainer v-if="!isLoading"/>
          <Loading v-else />
        </div>
      </div>
    </div>
  </div>
</template>
