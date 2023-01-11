<script>
import Navbar from "@/components/Navbar.vue"
import Sidebar from "@/components/Sidebar.vue"
import Stack from "@/components/Stack.vue"
import { mapActions, mapWritableState } from "pinia";
import { globalStore } from "../stores/global";

export default {
  components: {
    Navbar,
    Sidebar,
    Stack
  },

  computed: {
    ...mapWritableState(globalStore, ['news'])
  },

  methods: {
    ...mapActions(globalStore, ['fetchNews'])
  },

  created(){
    this.fetchNews()
  }
}
</script>

<template>
    <Navbar />
    <div class="container-fluid">
        <div class="row">
            <Sidebar />
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Portal</h1>
                </div>
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                            <div class="tab-content">
                                <div id="tab-1" class="tab-pane fade show p-0 active">
                                    <div class="row g-4">
                                        <Stack v-for="(portal, idx) in news" :key="idx" :portal="portal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>