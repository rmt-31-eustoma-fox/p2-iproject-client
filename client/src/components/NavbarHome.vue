<script>
import {mapWritableState} from "pinia"
import {useCounterStore} from "../stores/counter"
import Swal from 'sweetalert2'
export default {
  created(){
    if(localStorage.access_token){
      this.isLoggedIn = true
    }
    this.subscribe = localStorage.isSubscribed
  }, 
  computed: {
    ...mapWritableState(useCounterStore, ["isLoggedIn", "subscribe"])
  },
  methods: {
    logoutHandler(){
      Swal.fire({
        title: "Are you sure?",
        text: "You want to log out from Newkey?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log out!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          this.isLoggedIn = false;
          this.$router.push("/")
        }
      });
    }
  },
}
</script>

<template>
  <div id="box3" v-if="isLoggedIn">
    <div id="container">
      <div id="logo">
      </div>
      <div id="menu">
        <ul>
          <router-link to="/lobby" class="router">LOBBY</router-link>
          <router-link v-if="subscribe == 'false'" to="/subscription" class="router">SUBSCRIBE</router-link>
          <a @click.prevent="logoutHandler" class="router">LOGOUT</a>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
#box3{
  font-family: "Poppins", sans-serif;
}

#container{
  width: 100%;
  position: absolute;
  z-index: 1000;
}

#logo{
  float: left;
  margin-left: 100px;
  margin-top: 20px;
}

#logo img{
  width: 50px;
}

#menu{
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: white;
  margin-right: 150px;
  margin-top: 20px;
  float: right;
}

#menu ul{
  list-style: none;
}

#menu ul a.router{
  color:white;
  text-decoration: none;
  display: inline-block;
  margin-left: 100px;
}


</style>
