<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      searchInput: "",
    };
  },

  computed: {
    ...mapState(useCounterStore, ["logged"]),
  },

  created() {
    this.check();
  },

  methods: {
    ...mapActions(useCounterStore, ["check"]),

    handleLogout() {
      localStorage.clear();
      this.$router.push("/login");
      Swal.fire({
        // position: "top-end",
        icon: "success",
        title: "Signing out ...",
        showConfirmButton: false,
        timer: 1500,
      });
      this.check();
    },

    toHome() {
      this.$router.push("/");
    },

    // searchSubmit() {
    //   this.handleSearch(this.searchInput);
    // },
  },
};
</script>

<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-4">
    <div class="container px-4 px-lg-5">
      <a @click.prevent="toHome" href="" class="navbar-brand">Val Fave</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#!">Home</a> -->
            <!-- <RouterLink to="/" class="nav-link active">Home</RouterLink> -->
          </li>
          <li v-if="logged == true" class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#!"
              >Favorite</a
            > -->
            <RouterLink to="/favorite" class="nav-link active"
              >Favorite</RouterLink
            >
          </li>
          <li v-if="logged == false" class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#!">Login</a> -->
            <RouterLink to="/login" class="nav-link active">Login</RouterLink>
          </li>
          <li v-if="logged == true" class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#!">Logout</a> -->
            <RouterLink @click="handleLogout" to="" class="nav-link active"
              >Logout</RouterLink
            >
          </li>
          <!-- <li class="nav-item"><a class="nav-link" href="#!">About</a></li> -->
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Shop</a
            >
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#!">All Products</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#!">Popular Items</a></li>
              <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
            </ul>
          </li> -->
        </ul>
        <!-- <form class="d-flex">
            <button class="btn btn-outline-dark" type="submit">
              <i class="bi-cart-fill me-1"></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
          </form> -->
        <!-- ================ -->
        <!-- <form @submit.prevent="searchSubmit" class="d-flex" role="search">
          <input
            v-model="searchInput"
            class="form-control me-2"
            type="search"
            placeholder="Search agent"
            aria-label="Search"
          />
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>
