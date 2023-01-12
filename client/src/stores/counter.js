import { defineStore } from 'pinia'
import axios from "axios"
const url = "http://localhost:3000"

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    count: 0, 
    name: 'Eduardo',
    roomsList: "",
    translatedMessage: "",
    isLoggedIn: false,
    user: "",
    dogMessage: "",
    subscribe: localStorage.isSubscribed
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    callback(response) {
      axios({
        url: url + "/users/google/sign-in",
        method: "POST",
        headers: {
          access_token: response.credential,
        },
      })
        .then((data) => {
          console.log(data);
          localStorage.setItem("access_token", data.data.access_token);
          localStorage.username = data.data.username
          localStorage.isSubscribed = data.data.isSubscribed
          this.isLoggedIn = true
          this.router.push("/lobby")
        })
        .catch((err) => console.log(err))
    },
    async register(user){
      try {
        await axios({
          url: url+"/users/register",
          method: "post",
          data: {
            username: user.username,
            email: user.email,
            password: user.password
          }
        })
        this.router.push("/login")
      } catch (error) {
        console.log(error)
      }
    },
    async login(user){
      try {
        const {data} = await axios({
          url: url+"/users/login",
          method: "post",
          data: {
            email: user.email,
            password: user.password
          }
        })
        console.log(data.isSubscribed)
        localStorage.access_token = data.access_token
        localStorage.username = data.username
        localStorage.isSubscribed = data.isSubscribed
        console.log(localStorage.isSubscribed, data.isSubscribed)
        this.isLoggedIn = true
        this.router.push("/lobby")
      } catch (error) {
        console.log(error)
      }
    },
    async getRoom(){
      try {
        const {data} = await axios({
          url: url+"/rooms/getroom",
          method: "get",
          headers: {
            access_token: localStorage.access_token
          },
        })
        this.roomsList = data
      } catch (error) {
        console.log(error)
      }
    },
    async translate(message){
      try {
        const {data} = await axios({
          url: url+"/translate/",
          method: "post",
          data: {
            text: message
          }
        })
        this.translatedMessage = data.translatedText
      } catch (error) {
        console.log(error)
      }
    },
    async findUser(){
      try {
        const {data} = await axios({
          url: url+"/users/find",
          method: "get",
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.user = data.findUser
        console.log(data)
        localStorage.isSubscribed = data.findUser.isSubscribed
      } catch (error) {
        console.log(error, "findUser")
      }
    },
    async changeStatus(){
      try {
        const {data} = await axios({
          url: url+"/users/subscription",
          method: "patch",
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.findUser()
      } catch (error) {
        console.log(error)
      }
    },
    async subscription(){
      try {
        const {data} = await axios({
          url: url+"/users/generate-midtrans-token",
          method: "post",
          headers: {
            access_token: localStorage.access_token
          }
        })

        const cb = this.changeStatus
        const router = this.router

        window.snap.pay(data.token, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            console.log(result);
            cb()
            router.push("/lobby")
          },
        })
      } catch (error) {
        console.log(error)
      }
    },
    async dogFact(){
      try {
        const {data} = await axios({
          url: url+"/animals/dog",
          method: "get"
        })
        // console.log(data)
        this.dogMessage = data.message
        console.log(this.dogMessage)
      } catch (error) {
        console.log(error)
      }
    }
  },
})
