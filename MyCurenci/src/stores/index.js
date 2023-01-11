import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const useRootStore = defineStore("basis", {
  state: () => ({
    baseCurrency : '',
    quoteCurrency : '',
    currencies: [],
    theValue: [],
    theNews: [],
    exchangeDate : '',
    exchangeValue : []
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
      try {
        // console.log(this.theForexPair)
        const { data } = await axios({
          method: "get",
          url: "http://localhost:3000/forexValue",
          params : {
            forexPair : this.theForexPair
          }
        });
        
        // console.log(data)
        this.theValue = data;
        this.router.push({name:'graph',query: {exc : this.theForexPair}})
      } catch (error) {
        console.log(error);
      }
    },
    async fetchNews(){
        try {
            console.log(this.theForexPair)
            // console.log('Fetch the News of ', value.replaceAll('/',''))
            // this.router.push('/')
            const {data} = await axios({
                method: 'get',
                url: 'http://localhost:3000/forexNews',
                params : {
                    forexPair : this.theForexPair
                }
            })

            // console.log(data)
            this.theNews = data
            // console.log(this.theNews)
            // console.log('finish load news')
            this.router.push({name:'news',query: {exc : this.theForexPair}})
        } catch (error) {
            console.log(error)
        }
    },
    async fetchLatestExc(){
        try {
            const symbol = this.baseCurrency || 'USD/'
            const {data} = await axios({
                method: 'get',
                url : BASE_URL + '/forexExcRate',
                params : {
                    forexPair : symbol
                }
            })

            // console.log(data)
            this.exchangeDate = data.updatedAt
            this.exchangeValue = data.Pair
        } catch (error) {
            console.log(error)
        }
    }
  },
});
