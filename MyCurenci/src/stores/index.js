import { defineStore } from "pinia";
import axios from "axios";

// const BASE_URL = "https://micurenci-production.up.railway.app";
const BASE_URL = "http://localhost:3000"

export const useRootStore = defineStore("basis", {
  state: () => ({
    baseCurrency : '',
    quoteCurrency : '',
    currencies: [],
    theValue: [],
    theNews: [],
    exchangeDate : '',
    exchangeValue : [],
    isInTitleStage : true,
    isLoading : false,
    isLoadingNews : false,
    isLoadingGraph : false
  }),
  getters: {
    theForexPair(){
        return `${this.baseCurrency}/${this.quoteCurrency}`
    }
  },
  actions: {
    async fetchCurrenciesList() {
      try {
        const { data } = await axios({
          method: "get",
          url: BASE_URL + "/currencies",
        });

        this.currencies = data;
      } catch (error) {
        console.log(error);
      } 
    },
    async fetchForexPair() {
      this.isLoadingGraph = true
      this.router.push({name:'graph',query: {exc : this.theForexPair}})
      try {
        // console.log(this.theForexPair)
        const { data } = await axios({
          method: "get",
          url: BASE_URL + "/forexValue",
          params : {
            forexPair : this.theForexPair
          }
        });
        
        if(data.length < 1) {
          this.router.push({name: 'empty'})
        } else {
          this.theValue = data;
          this.router.push({name:'graph',query: {exc : this.theForexPair}})
        }

        // console.log(data)
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoadingGraph = false
      }
    },
    async fetchNews(){
        this.isLoadingNews = true
        this.router.push({name:'news',query: {exc : this.theForexPair}})
        try {
            console.log(this.theForexPair)
            // console.log('Fetch the News of ', value.replaceAll('/',''))
            // this.router.push('/')
            const {data} = await axios({
                method: 'get',
                url: BASE_URL + '/forexNews',
                params : {
                    forexPair : this.theForexPair
                }
            })

            if(data.length < 1){
              this.router.push({name: 'empty'})
            } else {
              // console.log(data)
              this.theNews = data
              // console.log(this.theNews)
              // console.log('finish load news')
              this.router.push({name:'news',query: {exc : this.theForexPair}})
            }

        } catch (error) {
            console.log(error)
        } finally {
          this.isLoadingNews = false
        }
    },
    async fetchLatestExc(){
      this.isLoading = true;
      console.log(this.isLoading)
        try {
          const symbol = `${this.baseCurrency}/`
          // console.log(symbol)
            const {data} = await axios({
                method: 'get',
                url : BASE_URL + '/forexExcRate',
                params : {
                    forexPair : symbol
                }
            })
            
            this.exchangeDate = data.updatedAt
            this.exchangeValue = data.Pair
        } catch (error) {
            console.log(error)
        } finally {
          this.isLoading = false
          console.log(this.isLoading)
        }
    }
  },
});
