
import { defineStore } from "pinia";
import axios from 'axios';
import Swal from 'sweetalert2';

const server = axios.create({
  baseURL:"https://invidual-production.up.railway.app/"
})


function errorHandler(err) {
  // console.log(err);
  switch (err.message) {
    case "JsonWebTokenError":
    case "Invalid Token":
    case "Email Not Found":
    case "Email is required":
    case "Password is required":
    case "First Name is required":
    case "Last Name is required":
    case "Password length minimum must be 6 characters":
    case "Email already exist":
    case "Movie Not Found":
    case "Incorrect Input":
    case "Internal Server Error":
      let msg;
      if(err.message === "Invalid Token" || err.message === "JsonWebTokenError") {
        msg = "Invalid token"
      }
      else msg = err.message
      Swal.fire({
        icon: "error",
        title: msg
      });
      break;
    case "Forbidden":
      Swal.fire({
        icon: "warning",
        title: "Forbidden Access"
      })
      break;
    default:
      Swal.fire({
        icon: "error",
        title: err
      })
  }
}


export const useMainStore = defineStore("main", {
  state: () => ({
    movies:[],
    isLoading:false,
    movieWatch:[],
    user:{},
    isLogin:false,
    backgroundColorGenres: {
      "Adventure":"bg-red-600",
      "Fantasy":"bg-purple-600",
      "Thriller":"bg-gray-600",
      "Triller":"bg-gray-600",
      "Horror": "bg-slate-900",
      "Comedy":"bg-yellow-600",
      "Drama":"bg-rose-600",
      "Romance":"bg-pink-600",
      "Action": "bg-amber-800",
      "Family":"bg-fuchsia-400",
      "Crime":"bg-orange-900",
      "Music":"bg-orange-500",
      "Animation":"bg-blue-700",
      "Science Fiction": "bg-zinc-400",
      "Mystery": "bg-stone-800"
    }
  }),
  getters: {
    moviesChecker: (state) => {
      return state.movies.filter(val => val.image.search("originalnull") === -1)
    },
    formatDate: () => {
      return (date) => {
        const dates = new Date(date).getFullYear()
        return dates;
      }
    },
    formatGenresBackground: (state) => {
      return (genres) => {
        const genre = genres.map(val => val.name);
        const backGenre = {};
        genre.forEach(val => {
          backGenre[val] = state.backgroundColorGenres[val];
        })
        return backGenre;
      }
    },
    filterByReleaseDate() {
      const filt = this.moviesChecker.slice().sort((a,b) => {
        return new Date(a.releaseDate) - new Date(b.releaseDate);
      })
      return filt;
    },
    topMovies() {
      const top = this.moviesChecker.slice().sort((a,b) => {
        return b.popularity - a.popularity;
      })
      return top.slice(0,5);
    },
    filterByRating() {
      const filt = this.moviesChecker.slice().sort((a,b) => {
        return b.rating - a.rating;
      })
      return filt;
    },
    filterByReviewer() {
      const filt = this.moviesChecker.slice().sort((a,b) => {
        return b.ratingQuantity - a.ratingQuantity;
      })
      return filt;
    },
    filterByPG() {
      return this.moviesChecker.filter(val => val.certification === "PG")
    },
    formatVideoKey() {
      return (url) => {
        const locs = url.search("embed");
        return url.substr((locs+6));
      }
  }
  },
  actions: {
    changePage(page) {
      this.router.push(page)
    },
    async registerForm(data) {
      this.isLoading = true;
      try {
        await server.post("/register",data)
        this.isLoading = false;
        Swal.fire({
          icon:"success",
          title:"Success Register"
        })
        this.changePage("/login")
      } catch (error) {
        this.isLoading = false;
        console.log(error);
        errorHandler(error.response.data)
      }
    },
    async loginForm(data) {
      this.isLoading = true;
      try {
        const user = await server.post("/login", data)
        localStorage.access_token = user.data.access_token
        this.isLogin = true;
        this.isLoading = false;
        const check = await Swal.fire({
          icon: "success",
          title: "Login Success"
        })
        if(check.isConfirmed) this.changePage("/");;
      } catch (error) {
        this.isLoading = false;
        errorHandler(error.response.data)
      }
    },
    async getMovies() {
      this.isLoading = true;
      try {
        // const movie = await server.get("/moviesgenres", {
        //   headers:{access_token:localStorage.access_token}
        // })
        const movie = await server.get("/moviesgenres")
        this.movies = movie.data.movgen;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        errorHandler(error.response.data)
      }
    },
    async getUserBio() {
      this.isLoading = true;
      try {
        const getUser = await server.get(
          "/users",
          {headers: {access_token:localStorage.access_token}}
        )
        this.user = getUser.data.user;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        errorHandler(error.response.data)
      }
    },
    async getOneMovie(id) {
      this.isLoading = true;
      try {
        const {data} = await server.get(
          `/movies/${id}`,
          {headers:{access_token:localStorage.access_token}}
        )
        this.movieWatch = data.movie;
        this.movieWatch.video = this.formatVideoKey(this.movieWatch.video);
        console.log(this.movieWatch);
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        errorHandler(error.response.data)
      }
    },
    async subscription(data) {
      this.isLoading = true;
      try {
        // console.log(data);
        const subsId = await server.post(
          "/users/subscribe",
          data,
          {headers:{access_token:localStorage.access_token}}
        )
        // console.log(subsId);
        const {url} = subsId.data.subsId.action[0];
        window.location.assign(url);
        this.isLoading = false;
        // console.log(url);
      } catch (error) {
        this.isLoading = false;
        errorHandler(error.response.data)
      }
    },
    async updateSubscription(){
      this.isLoading = true;
      try {
        await server.patch(
          "/users/subscribe",{},
          {headers: {access_token:localStorage.access_token}}
        )
        // console.log(updateSubs.data);
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        errorHandler(error.response.data)
      }
    },
    async addWatchList(id) {
      try {
        const addW = await server.post(
          `/users/${id}`,{},
          {headers:{access_token:localStorage.access_token}}
        )
        // console.log(addW);
        Swal.fire({
          icon:"success",
          title:"adding movie to watch list"
        })
      } catch (error) {
        errorHandler(error.response.data)
      }
    },
    async emailClient(data) {
      try {
        const emailS = await server.post(
          "/users/email",
          data,
          {headers: {access_token:localStorage.access_token}}
        )
        console.log(emailS);
        Swal.fire({
          icon:"success",
          title:"Email send success"
        })
      } catch (error) {
        errorHandler(error.response.data)
      }
    },
    async googleLogin(creden) {
      try {
        this.isLoading = true;
        const {data} = await server.post(
          "/google-login",
          {},
          {
            headers:{access_token:creden}
          }
        )
        localStorage.access_token = data.access_token;
        this.isLoading = false;
        this.isLogin = true;
        const check = await Swal.fire({
          icon: "success",
          title: "Login Success"
        })
        if(check.isConfirmed) this.changePage("/");
      } catch (error) {
        this.isLoading = false;
        errorHandler(error.response.data)
        // errorHandler(error.response.data)
      }
    },
    async facebookLogin(access_token) {
      try {
        const response = await axios.get(`https://graph.facebook.com/v13.0/me?fields=id,name,email,picture&access_token=${access_token}`);
        // console.log(response.data);
        const {data} = await server.post(
          "/facebook-login",
          {...response.data}
        )
        // console.log(resp);
        localStorage.access_token = data.access_token;
        this.isLoading = false;
        this.isLogin = true;
        const check = await Swal.fire({
          icon: "success",
          title: "Login Success"
        })
        if(check.isConfirmed) this.changePage("/");
      } catch (error) {
        // errorHandler(error.response);
        console.log(error);
      }
    }
  }
});