import axios from 'axios'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    registerName :'',
    registerPassword : '',
    registerEmail : '',
    loginEmail : '',
    loginPassword : '',
    baseUrl : 'http://localhost:3000',
    moviesList : [],
    favoriteList : [],
    detailMovie : {}
    }),
  getters: {

  },
  actions: {
    async registerHandler (){
      try {
        const {data} = await axios({
          url : this.baseUrl+"/customers/register",
          method : 'post',
          data : {
            name : this.registerName,
            email : this.registerEmail,
            password : this.registerPassword
          }
        })
        console.log(data,"<<<<<<<<<<< data register");
        this.router.push("/login")
      } catch (error) {
        console.log(error);
      }
    },

    async loginHandler () {
      try {
        const {data} = await axios({
          url : this.baseUrl+"/customers/login",
          method : 'post',
          data : {
            email : this.loginEmail,
            password : this.loginPassword
          }
        })
        console.log(data,"<<<<<<<<<login");
        localStorage.access_token = data.data
        this.router.push('/')
        // this.router.push('/')
      } catch (error) {
        console.log(error);
      }
    },

    async fetchMovie (query={}) {
      try {
        const {data} = await axios({
          url : this.baseUrl+"/movies",
          method : "get",
          params : {
            time : query.time
          },
          headers : {
            access_token : localStorage.access_token
          }
        })
        console.log(data,"<<<<<<fetch course");
        this.moviesList = data
      } catch (error) {
        console.log(error);
      }
    },

    async addToFavorite(externalId){
      try {
        const {data} = await axios({
          url : this.baseUrl+"/favorite/"+externalId,
          method : "post",
          headers : {
            access_token : localStorage.access_token
          }
        })
        this.router.push('/favorite')
      } catch (error) {
        console.log(error);
      }
    },

    async getDataFavorite(){
      try {
        const {data} = await axios({
          url : this.baseUrl+"/favorite",
          method : "get",
          headers : {
            access_token : localStorage.access_token
          }
        })
        this.favoriteList = data
      } catch (error) {
        console.log(error);
      }
    },

    async getDetailMovie(movieId){
      try {
        const {data} = await axios({
          url : this.baseUrl+"/movies/"+movieId,
          method : "get",
          headers : {
            access_token : localStorage.access_token
          }
        })
        this.detailMovie = data
      } catch (error) {
        console.log(error);
      }
    }
  },
})
