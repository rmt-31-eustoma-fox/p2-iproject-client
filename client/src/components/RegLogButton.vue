<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    computed: {
        page(){
            return this.$route.name
        }
    }
}
</script>
<template>
    <div v-if="page == 'login'">
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
                <router-link class="nav-link active" id="tab-login" data-mdb-toggle="pill" role="tab" aria-controls="pills-login"
                    aria-selected="true" to="/login">Login</router-link>
            </li>
            <li class="nav-item" role="presentation">
                <router-link class="nav-link" id="tab-register" data-mdb-toggle="pill" role="tab"
                    aria-controls="pills-register" aria-selected="false" style="cursor: pointer;" to="/register">Register</router-link>
            </li>
        </ul>
    </div>
    <div v-if="page == 'register'">
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
                <router-link class="nav-link" id="tab-login" data-mdb-toggle="pill" role="tab" 
                    aria-controls="pills-login" aria-selected="true" style="cursor: pointer;" to="/login">Login</router-link>
            </li>
            <li class="nav-item" role="presentation">
                <router-link class="nav-link active" id="tab-register" data-mdb-toggle="pill" role="tab"
                    aria-controls="pills-register" aria-selected="false" to="/register">Register</router-link>
            </li>
        </ul>
    </div>
</template>
<style scoped>
div {
    padding-bottom: 20px;
}
</style>