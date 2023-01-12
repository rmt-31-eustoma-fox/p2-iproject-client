import { ref, computed, isReactive } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
// import nodemailer from 'nodemailer'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    url: 'http://localhost:3000',
    events: '',
    drivers: '',
    teams: '',
    eventPick: '',
    driverDetails: '',
  }),
  actions: {
    async fetchEvent(){
      try {
        const { data } = await axios({
          url: this.url + '/circuits',
          method: 'get', 
  
        })
        this.events = data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchDriver(){
      try {
        const { data } = await axios({
          url: this.url + '/drivers',
          method: 'get'
        })
        this.drivers = data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchTeam(){
      try {
        const { data } = await axios({
          url: this.url + '/teams',
          method: 'get'
        })
        this.teams = data
      } catch (error) {
        console.log(error)
      }
    },
    async findEvent(id){
      try {
        const { data } = await axios({
          url: this.url + `/circuits/${id}`,
          method: 'get'
        })
        this.eventPick = data
        this.router.push(`/event/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
    async findDriver(id){
      try {
        const {data} = await axios({
          url: this.url + `/drivers/${id}`,
          method: 'get'
        })
        this.driverDetails = data
        this.router.push(`/drivers/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
    async invoiceSend(user){
      try {
        const { data } = await axios({
          url: this.url + '/invoice',
          method: 'post',
          data: {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            phone: user.phone
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    async midtransPayment(user){
      try {
        const { data } = await axios({
          url: this.url + '/payment-midtrans',
          method: 'post',
          data: {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            phone: user.phone
          }
        })

        // const options = {
        //   from: 'f1tickets@outlook.com',
        //   to: user.email,
        //   subject: 'F1 TICKETS PAYMENT INVOICE TICKET',
        //   text: 'YOUR PAYMENT HAS COMPLETE'
        // }

        const cb = this.invoiceSend(user)
        const home = this.router.push('/')

        window.snap.pay(data.token, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            console.log(result);
            cb()
            home()
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    async invoiceSend(user){
      try {
        const { data } = await axios({
          url: this.url + '/invoice',
          method: 'post',
          data: {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            phone: user.phone
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
})
