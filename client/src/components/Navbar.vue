<script>
export default {
    methods : {
        logoutHandler () {
            localStorage.clear()
            this.$router.push('/login')
        }
    }
}
</script>


<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div class="container">
          <router-link to="/" class="m-2 btn btn-outline-info" >Movie</router-link>
          <router-link class="m-2 btn btn-outline-info" href="" to="/news">News Movie</router-link>
          <div class="me-auto"></div>
          <ul class="navbar-nav mx-2 mb-2 mb-lg-0">
            <li class="nav-item m-2">
              <router-link  class="nav-link text-white btn btn-outline-warning" aria-current="page" href="#" to="/favorite" >My Favorite</router-link>
            </li>
            <li class="nav-item m-2">
              <a @click.prevent="logoutHandler" class="nav-link text-white btn btn-outline-danger" aria-current="page" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
</template>