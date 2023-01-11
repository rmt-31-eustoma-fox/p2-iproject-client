import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const globalStore = defineStore('global', {
  state: () => ({
    baseURL: "http://localhost:3000",
    isLogin: false,
    username: "",
    email: "",
    password: "",
  }),

  actions: {
    
  }
})
