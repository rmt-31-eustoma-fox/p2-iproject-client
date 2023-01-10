<script>
import { mapState, mapActions } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import { useRootStore } from '../stores';
import CurrencyCard from '../components/CurrencyCard.vue'

export default {
  data() {
    return {
      from_currency: '',
      to_currency: '',
      data2: [],
    }
  },
  components: {
    CurrencyCard
  },
  computed: {
    ...mapState(useRootStore, ['currencies','theValue']),
    getPairs(){
      return `${this.from_currency}/${this.to_currency}`
    }
  },
  methods : {
    ...mapActions(useRootStore,['fetchForexPair','fetchNews']),
    toChangeGraph(){
      console.log(this.$route.query.exc , '<<< Method')
      if(this.getPairs.length > 4){
        this.fetchForexPair(this.getPairs)
        // this.$router.push({name:'home',query: {exc : this.getPairs}})
      }else{
        // this.$router.push({name:'home'})
        console.log('Masih ada form kosong')
        this.$router.push({name:'dummy'})
      }
    },
    toFetchNews(){
      if(this.getPairs.length > 4){
        this.fetchNews(this.getPairs)
        // this.$router.push({name:'news',query: {exc : this.getPairs}})
      }else{
        // this.$router.push({name:'home'})
        console.log('Masih ada form kosong')
        this.$router.push({name:'dummy'})
      }
    }
  },
  // watch : {
  //   theValue(newVal, oldVal){
  //     // console.log({newVal, oldVal})
  //     this.$router.push({name:'home', query: {exc : this.getPairs}})
  //   },

  // },
  created() {
    console.log(this.$route.query.exc, '<<< createdHook')
    const {exc} = this.$route.query
    console.log(exc)
    if(exc) {
      [this.from_currency, this.to_currency] = this.$route.query.exc.split('/')
    }
    // this.toChangeGraph()
    this.toFetchNews()
  },
  // unmounted(){
  //   // this.pairValue = []
  //   // console.log('unmount homeview')
  // }
  // mounted(){
  //   console.log('mount main')
  //   this.$router.push({name : 'dummy'})
  // }
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
        <!-- <nav aria-label="Page navigation example" class="mt-2 float-end"> -->
        <!-- <ul class="pagination">
            <li class="page-item" :class="{ disabled: previousPage === undefined }">
              <a class="page-link" href="#" tabindex="-1" @click.prevent="localFetchNews(previousPage)">Previous</a>
            </li> -->
        <!-- <li v-if="previousPage !== undefined" class="page-item"><a class="page-link" href="#" @click.prevent="localFetchNews(previousPage)">{{ previousPage}}</a></li> -->
        <!-- <li class="page-item"><a class="page-link disabled" href="#" @click.prevent="localFetchNews(curentPage)">{{
              curentPage
            }} of {{ maxPage }}</a></li> -->
        <!-- <li v-if="nextPage !== undefined" class="page-item"><a class="page-link" href="#" @click.prevent="localFetchNews(nextPage)" >{{ nextPage}}</a></li>   -->
        <!-- <li class="page-item" :class="{ disabled: nextPage === undefined }">
              <a class="page-link" href="#" @click.prevent="localFetchNews(nextPage)">Next</a>
            </li>
          </ul> -->
        <!-- </nav> -->
        <h2 class="mt-2">Currencies List</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-9">
        <div class="row">
          <!-- <form> -->
          <div class="col-5">
            <div class="form-floating">
              <select class="form-select" id="fromSelect" aria-label="Floating label select from"
                v-model="from_currency">
                <option value="" selected>Select Base</option>
                <template v-for="(currency, idx) in currencies" :key="idx">
                  <option :value="currency.symbol">{{ currency.symbol }}</option>
                </template>
              </select>
              <label for="floatingSelect">Base</label>
            </div>
          </div>
          <div class="col-5">
            <div class="form-floating mb-3">
              <select class="form-select" id="toSelect" aria-label="Floating label select to" v-model="to_currency">
                <option value="" selected>Select Quote</option>
                <template v-for="(currency, idx) in currencies" :key="idx">
                  <option :value="currency.symbol">{{ currency.symbol }}</option>
                </template>
              </select>
              <label for="floatingSelect">Quote</label>
            </div>
          </div>
          <!-- </form> -->
          <div class="col-2">
            <div class="d-grid">
              <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                <a class="btn btn-primary float-end btn-sm" :class="{disabled: (getPairs.length < 5)}" type="submit" @click.prevent="toChangeGraph">Get Graph</a>
                <!-- <router-link class="btn btn-secondary float-end btn-sm" :to="{name:'news'}">Get News</router-link> -->
                <a class="btn btn-secondary float-end btn-sm" @click.prevent="toFetchNews">Get News</a>
              </div>
              <!-- <router-link :to="{name:'home'}">Test</router-link> -->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h2 class="mt-2" v-if="$route.name === 'home'">Graph of {{ getPairs }}</h2>
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
        <div class="card-columns" style="overflow-y: scroll; height: 600px;">
          <CurrencyCard v-for="currency in currencies" :key="currency.id" :cardValue="currency" />
        </div>
      </div>
    </div>
  </div>
</template>
