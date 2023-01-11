<script>
export default {
  created(){
    console.log("masuk navbar")
  }, 
  methods: {
    logoutHandler(){
      localStorage.clear()
      this.$router.push("/login")
    }
  }
}
</script>

<template>
  <div id="box3">
    <div id="container">
      <div id="logo">
        <img src="logo" />
      </div>
      <div id="menu">
        <ul>
          <router-link to="/lobby" class="router">LOBBY</router-link>
          <router-link to="/subscription" class="router">SUBSCRIBE</router-link>
          <a to="/logout" @click.prevent="logoutHandler" class="router">LOGOUT</a>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

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
  font-family: 'Bahnschrift Condensed';
  font-size: 14px;
  color: white;
  letter-spacing: 2px;
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
