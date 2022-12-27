<script>
import Login from './components/Login.vue'
import Register from './components/Register.vue';
export default {
  components: {
    Login, Register
  },
  data (){
    return {
      page: "login"
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
</template>

<style scoped>
</style>
