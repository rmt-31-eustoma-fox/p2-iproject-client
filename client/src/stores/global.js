import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const globalStore = defineStore('global', {
  state: () => ({
    // baseURL: "http://localhost:3000",
    baseURL: "https://readingshed-production.up.railway.app",
    isLogin: false,
    isLoading: false,
    nickname: "",
    username: "",
    email: "",
    password: "",
    query: "",
    totalItems: 0,
    books: [],
    mybooks: [],
    orders: [],
    quote: "",
    news: [],
    dataBook: {
      title: "",
      code: "",
      authors: "",
      imageUrl: "",
      publisher: "",
      publishedDate: "",
      pageCount: "",
      isbn: "",
      price: 50000,
      description: ""
    }
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
    },

    async fetchBooks(){
      try {
        this.isLoading = true
        const { data } = await axios({
          method: "get",
          url: this.baseURL + "/books?query=" + this.query,
          headers: {access_token: localStorage.access_token}
        })

        this.books = data.items
        this.totalItems = data.totalItems
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      } finally {
        this.isLoading = false
      }
    },

    async fetchQuote(){
      try {
        this.isLoading = true
        const { data } = await axios({
          method: "get",
          url: this.baseURL + "/quotes",
          headers: {access_token: localStorage.access_token}
        })

        this.quote = data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      } finally {
        this.isLoading = false
      }
    },

    async addOrder(){
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseURL + "/orders",
          headers: {access_token: localStorage.access_token},
          data: {
            title: this.dataBook.title,
            code: this.dataBook.code,
            authors: this.dataBook.authors,
            imageUrl: this.dataBook.imageUrl,
            publisher: this.dataBook.publisher,
            publishedDate: this.dataBook.publishedDate,
            pageCount: this.dataBook.pageCount,
            isbn: this.dataBook.isbn,
            price: this.dataBook.price,
            description: this.dataBook.description
          }
        })
        Swal.fire({
          icon: 'success',
          title: `Success added to order list`,
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

    async fetchOrders(){
      try {
        this.isLoading = true
        const { data } = await axios({
          method: "get",
          url: this.baseURL + "/orders",
          headers: {access_token: localStorage.access_token}
        })
        
        this.orders = data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      } finally {
        this.isLoading = false
      }
    },

    async delOrder(id){
      try {
        const { data } = await axios({
          method: "delete",
          url: this.baseURL + "/orders/" + id,
          headers: {access_token: localStorage.access_token}
        })
        await this.fetchOrders()
        Swal.fire({
          icon: 'success',
          title: data.message,
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

    async paymentByOrder(id){
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseURL + "/payments",
          headers: {access_token: localStorage.access_token},
          data: {
            code: this.dataBook.code,
            price: this.dataBook.price
          }
        })
        const addMyBook = this.addMyBook
        const delOrder = this.delOrder
        window.snap.pay(data.token, {
          onSuccess: function(result){
            addMyBook()
            delOrder(id)
          }
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

    async paymentDirectly(){
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseURL + "/payments",
          headers: {access_token: localStorage.access_token},
          data: {
            code: this.dataBook.code,
            price: this.dataBook.price
          }
        })
        const addMyBook = this.addMyBook
        const addOrder = this.addOrder
        window.snap.pay(data.token, {
          onSuccess: function(result){
            addMyBook();
          },
          onError: function(result){
            addOrder()
          },
          onClose: function(){
            addOrder()
          }
        })
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async addMyBook(){
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseURL + "/mybooks",
          headers: {access_token: localStorage.access_token},
          data: {
            title: this.dataBook.title,
            code: this.dataBook.code,
            authors: this.dataBook.authors,
            imageUrl: this.dataBook.imageUrl,
            publisher: this.dataBook.publisher,
            publishedDate: this.dataBook.publishedDate,
            pageCount: this.dataBook.pageCount,
            isbn: this.dataBook.isbn,
            price: this.dataBook.price,
            description: this.dataBook.description
          }
        })
        Swal.fire({
          icon: 'success',
          title: `Success added to shelves`,
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

    async fetchMyBooks(){
      try {
        this.isLoading = true
        const { data } = await axios({
          method: "get",
          url: this.baseURL + "/mybooks",
          headers: {access_token: localStorage.access_token}
        })
       
        this.mybooks = data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      } finally {
        this.isLoading = false
      }
    },

    async updateStatus(id){
      try {
        const { data } = await axios({
          method: "patch",
          url: this.baseURL + "/mybooks/" + id,
          headers: {access_token: localStorage.access_token}
        })
        await this.fetchMyBooks()
        Swal.fire({
          icon: 'success',
          title: data.message,
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

    async fetchNews(){
      try {
        this.isLoading = true
        const { data } = await axios({
          method: "get",
          url: this.baseURL + "/news",
          headers: {access_token: localStorage.access_token}
        })
        this.news = data.articles
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      } finally {
        this.isLoading = false
      }
    }
  }
})
