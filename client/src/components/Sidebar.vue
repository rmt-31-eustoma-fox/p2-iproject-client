<script>
import { mapActions, mapWritableState } from 'pinia';
import { globalStore } from '../stores/global';


export default {
  computed: {
    ...mapWritableState(globalStore, ['nickname'])
  },

  methods: {
    ...mapActions(globalStore, ['fetchQuote']),

    clickHome(){
        this.fetchQuote()
        this.$router.push("/")
    }
  }
}
</script>

<template>
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-4">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a @click.prevent="clickHome" class="nav-link" aria-current="page" href="#">
              <i class="fa-solid fa-book"></i>
              Books
            </a>
          </li>
          <li class="nav-item">
            <router-link to="/mybook" class="nav-link" href="#">
              <i class="fa-solid fa-list"></i>
              My Shelves
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/portal" class="nav-link" href="#">
              <i class="fa-solid fa-earth-americas"></i>
              Portal
            </router-link>
          </li>
        </ul>
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Profile</span>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">
              <i class="fa-solid fa-circle-user"></i>
              {{ nickname }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
</template>