import { defineStore } from 'pinia'
import axios from "axios"
const url = "http://localhost:3000"

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    count: 0, 
    name: 'Eduardo',
    roomsList: "",
    translatedMessage: ""
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
        console.log(data)
        localStorage.access_token = data.access_token
        localStorage.username = data.username
        this.router.push("/lobby")
      } catch (error) {
        console.log(error)
      }
    },
    async addRoom(name){
      try {
        console.log(name)
        await axios({
          url: url+"/rooms/addroom",
          method: "post",
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            name
          }
        })
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
    }
  },
})
