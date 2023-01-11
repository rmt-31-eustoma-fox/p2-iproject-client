import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const globalStore = defineStore('global', {
  state: () => ({
    baseURL: "http://localhost:3000",
    isLogin: false,
    nickname: "",
    username: "",
    email: "",
    password: "",
  }),

  actions: {
    async register(){
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseURL + "/register",
          data: {
            username: this.username,
            email: this.email,
            password: this.password
          }
        })
        
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("name", data.name)
        this.isLogin = true
        this.nickname = data.name
        this.router.push("/")

        await Swal.fire({
          icon: 'success',
          title: `${data.email} successfully registered`,
          showConfirmButton: false,
          timer: 1500
        })

        Swal.fire({
          icon: 'success',
          title: `Welcome ${data.name}`,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async login(){
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseURL + "/login",
          data: {
            email: this.email,
            password: this.password
          }
        })

        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("name", data.name)
        this.isLogin = true
        this.nickname = data.name
        this.router.push("/")

        Swal.fire({
          icon: 'success',
          title: `Welcome ${data.name}`,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async googleSignIn(response){
      try {
        const { credential } = response
        const { data } = await axios({
          method: "post",
          url: this.baseURL + "/google-sign-in",
          headers: { "google-oauth-token": credential }
        })
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("name", data.name)
        this.isLogin = true
        this.nickname = data.name
        this.router.push("/")

        Swal.fire({
          icon: 'success',
          title: `Welcome ${data.name}`,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    }
  }
})
