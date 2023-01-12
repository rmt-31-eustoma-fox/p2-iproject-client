import { defineStore } from "pinia";
import axios from "axios"

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    baseUrl: "https://hacktravel-production.up.railway.app/",
    cities: [],
    accomodations: [],
    accomodation: {},
    transactions: [],
    loginStatus: false
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    async fetchCities() {
      try {
        const {data} = await axios({
          url: this.baseUrl + "cities",
          method: "get",
        })
        this.cities = data
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message
        })
      }
    },

    async fetchAccomodationByCity(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "accomodations/" + id,
          method: "get",
        })
        this.accomodations = data
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message
        })
      }
    },
    
    async fetchAccomodationDetail(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "findAccomodations/" + id,
          method: "get",
        })
        this.accomodation = data
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message
        })
      }
    },

    async fetchTransaction() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "transactions",
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        })
        this.transactions = data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message
        })
      }
    },

    async addTransaction(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "transactions/" + id,
          method: "post",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.fetchTransaction()
        Swal.fire({
          icon: "success",
          title: data.message
        })
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: error.response.data.message
        })
      }
    },

    async deleteTransaction(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "transactions/" + id,
          method: "delete",
          headers: {
            access_token: localStorage.access_token,
          },
        })
        this.fetchTransaction()
        Swal.fire({
          icon: "success",
          title: data.message
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message
        })
      }
    },

    async successPayment(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "transactions/" + id,
          method: "patch",
          headers: {
            access_token: localStorage.access_token,
          },
        })
        this.fetchTransaction()
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message
        })
      }
    },

    async makePayment(id) {
      try {
        const {data} = await axios({
          url: this.baseUrl + "midtransToken/" + id,
          method: 'post',
          headers: {
            access_token: localStorage.access_token,
          },
        })
        const cb = this.successPayment
        window.snap.pay(data.token, {
          onSuccess: function(result){
            Swal.fire({
              icon: "success",
              title: "Payment Success"
            })
            cb(id)
          },
          onError: function(result){
            Swal.fire({
              icon: "error",
              title: "Payment Failed"
            })
          },
          onClose: function(){
            Swal.fire({
              icon: "error",
              title: "You did not finish payment yet"
            })
          }
        })
      } catch (error) {
        console.log(error);
      }
    },

    async registerHandler(value) {
      try {
        await axios({
          url: this.baseUrl + "register",
          method: "post",
          data: {
            name: value.name,
            email: value.email,
            password: value.password,
            dateOfBirth: value.dateOfBirth,
            phoneNumber: value.phoneNumber,
            address: value.address,
          },
        })
        this.router.push("/login");
        Swal.fire({
          icon: "success",
          title: "Success Create an Account!"
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message
        })
      }
    },

    async loginHandler(value) {
      try {
        const {data} = await axios({
          url: this.baseUrl + "login",
          method: "post",
          data: {
            email: value.email,
            password: value.password
          }
        })
        localStorage.access_token = data.access_token
        this.loginStatus = true
        this.router.push("/")
        Swal.fire({
          icon: "success",
          title: `Welcome ${data.name}`
        })
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: error.response.data.message
        })
      }
    },

    async googleLoginHandler(response) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "google-sign-in",
          method: "post",
          headers: {
            "google-oauth-token": response.credential,
          },
        })
        localStorage.access_token = data.access_token;
        this.loginStatus = true;
        this.router.push("/");
        Swal.fire({
          icon: "success",
          title: `Welcome ${data.name}!`
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message
        })
      }
    },

    async logoutHandler() {
      try {
        localStorage.clear()
        this.loginStatus = false
        this.router.push("/login")
        Swal.fire({
          icon: "success",
          title: 'See you next time'
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message
        })
      }
    }
  },
})
