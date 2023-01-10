import { defineStore } from 'pinia'
import axios from "axios"
const url = "http://localhost:3000"

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    count: 0, 
    name: 'Eduardo' 
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
          this.router.push("/mode")
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
        localStorage.access_token = data.access_token
        this.router.push("/mode")
      } catch (error) {
        console.log(error)
      }
    }
  },
})
