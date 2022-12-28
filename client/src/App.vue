<script>
import Login from './components/Login.vue'
import Register from './components/Register.vue';
import Home from './components/Home.vue'
import Sidebar from './components/Sidebar.vue'
import Deck from './components/Deck.vue'
import EditDeck from './components/EditDeck..vue'
export default {
  components: {
    Login, Register, Home, Sidebar, Deck, EditDeck
  },
  data (){
    return {
      page: "editDeck",
      editdeck: true
    }
  },
  methods: {
    pageChange(page) {
      this.page = page
    },
  }
}
</script>

<template>
<h1>HelloWorld</h1>
<Login v-if="page == 'login'" :page="page" @pageChange="pageChange"/>
<Register v-if="page == 'register'" :page="page" @pageChange="pageChange"/>
<div class="d-flex col">
  <Sidebar v-if="page != 'login' && editdeck != true"/>
  <Home v-if="page == 'home'"/>
  <Deck v-if="page == 'deck'"/>
  <EditDeck v-if="page == 'editDeck' && editdeck == true" />
</div>
</template>

<style scoped>
</style>
