<script>
import Navbar from "@/components/Navbar.vue"
import Sidebar from "@/components/Sidebar.vue"
import Row from "@/components/Row.vue"
import { mapActions, mapWritableState } from "pinia";
import { globalStore } from "../stores/global";

export default {
  components: {
    Navbar,
    Sidebar,
    Row
  },

  computed: {
    ...mapWritableState(globalStore, ['mybooks'])
  },

  methods: {
    ...mapActions(globalStore, ['fetchMyBooks'])
  },

  created(){
    this.fetchMyBooks()
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
                    <h1 class="h2">My Books</h1>
                </div>
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <!-- <th scope="col">Cover</th> -->
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Publisher</th>
                            <th scope="col">ISBN</th>
                            <th scope="col">Date Added</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Row v-for="(mybook, idx) in mybooks" :key="idx" :queue="idx+1" :mybook="mybook"/>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    </div>
</template>