import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const useRootStore = defineStore("basis", {
  state: () => ({
    currencies: [],
    theValue: [],
    theNews: []
  }),
  getters: {},
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
    async dummyFetchForex(from, to) {
      try {
        const { data } = await axios({
          method: "get",
          url: "http://localhost:8000/values",
        });

        // console.log(data)
        // data.slice(0,20)
        let dummy = [];
        data.forEach((element) => {
          const { datetime, open, high, close, low } = element;
          const obj = {
            time: datetime,
            open: parseFloat(open),
            high: parseFloat(high),
            low: parseFloat(low),
            close: parseFloat(close),
          };
          dummy.push(obj);
        });
        dummy.reverse();
        this.theValue = dummy;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchForexPair(value) {
      try {
        console.log(value)
        const { data } = await axios({
          method: "get",
          url: "http://localhost:3000/forexValue",
          params : {
            forexPair : value
          }
        });
        
        // console.log(data)
        this.theValue = data;
        this.router.push({name:'home',query: {exc : value}})
      } catch (error) {
        console.log(error);
      }
    },
    async fetchNews(value){
        try {
            // console.log('Fetch the News of ', value.replaceAll('/',''))
            // this.router.push('/')
            const {data} = await axios({
                method: 'get',
                url: 'http://localhost:3000/forexNews',
                params : {
                    forexPair : value
                }
            })

            console.log(data)
            this.theNews = data
            // console.log(this.theNews)
            this.router.push({name:'news',query: {exc : value}})
        } catch (error) {
            console.log(error)
        }
    }
  },
});
