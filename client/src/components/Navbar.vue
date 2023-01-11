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
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #f59e0b !important">
        <div class="container">
          <router-link to="/" >Movie</router-link>
          <div class="me-auto"></div>
          <ul class="navbar-nav mx-2 mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link  class="nav-link text-white" aria-current="page" href="#" to="/favorite" >My Favorite</router-link>
            </li>
            <li class="nav-item">
              <a @click.prevent="logoutHandler" class="nav-link text-white" aria-current="page" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
</template>