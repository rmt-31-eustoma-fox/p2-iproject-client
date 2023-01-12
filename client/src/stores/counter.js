import { defineStore } from 'pinia'
import axios from "axios"
import Swal from 'sweetalert2'
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
    subscribe: false,
    isLoading: false,
    fullPage: true
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    callback(response) {
      this.isLoading = true
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
          Swal.fire({
            title: "Success!",
            text: `Welcome to DC Community Chat ${localStorage.username}!`,
            icon: "success",
          });
          this.isLoggedIn = true
          this.isLoading = false
          this.subscribe = localStorage.isSubscribed
          this.router.push("/lobby")
        })
        .catch((err) => {
          this.isLoading = false
          this.error(err)
        })
    },
    async register(user){
      try {
        this.isLoading = true
        await axios({
          url: url+"/users/register",
          method: "post",
          data: {
            username: user.username,
            email: user.email,
            password: user.password
          }
        })
        Swal.fire({
          title: "Success!",
          text: `Success create a new user!`,
          icon: "success",
        });
        this.subscribe = localStorage.isSubscribed
        this.isLoading = false
        this.router.push("/login")
      } catch (error) {
        this.isLoading = false
        this.error(error)
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
        Swal.fire({
          title: "Success!",
          text: `Welcome to DC Community Chat ${localStorage.username}!`,
          icon: "success",
        });
        this.subscribe = localStorage.isSubscribed
        this.isLoggedIn = true
        this.router.push("/lobby")
      } catch (error) {
        this.error(error)
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
        this.subscribe = localStorage.isSubscribed
        this.roomsList = data
      } catch (error) {
        this.error(error)
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
        this.subscribe = localStorage.isSubscribed
        this.translatedMessage = data.translatedText
      } catch (error) {
        this.error(error)
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
        this.subscribe = localStorage.isSubscribed
        this.user = data.findUser
        console.log(data)
        localStorage.isSubscribed = data.findUser.isSubscribed
      } catch (error) {
        this.error(error)
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
        this.subscribe = localStorage.isSubscribed
        this.findUser()
      } catch (error) {
        this.error(error)
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
        this.subscribe = localStorage.isSubscribed
        const cb = this.changeStatus
        const router = this.router

        window.snap.pay(data.token, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            console.log(result);
            cb()
            Swal.fire({
              title: "Success!",
              text: "Thank you for your subscribe!",
              icon: "success",
            });
            router.push("/lobby")
          },
        })
        this.subscribe = localStorage.isSubscribed
      } catch (error) {
        this.error(error)
      }
    },
    async dogFact(){
      try {
        const {data} = await axios({
          url: url+"/animals/dog",
          method: "get"
        })
        this.subscribe = localStorage.isSubscribed
        this.dogMessage = data.message
        // console.log(this.dogMessage)
      } catch (error) {
        this.error(error)
      }
    },
    error(err) {
      if (err.response.data.message === "Invalid Token") {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Alright :(",
        });
        localStorage.clear();
        this.router.push("/login")
      } else {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Alright :(",
        });
      }
    }
  },
})
