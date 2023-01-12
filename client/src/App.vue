<script>
import { mapWritableState } from 'pinia';
import Navbar from './components/Navbar.vue';
import { useMainStore } from './stores/main';
import PreloaderVue from './components/Preloader.vue';

export default {
    data() {
        return {
            navbarOn:false
        }
    },
    computed: {
        ...mapWritableState(useMainStore, ["isLogin","isLoading"])
    },
    components: {
        Navbar,
        PreloaderVue
    },
    created() {
        if(localStorage.access_token) {
            this.isLogin = true
        }
        else this.isLogin = false
        this.$watch(
            () => this.$route.name,
            function(newVal) {
                if(["login",'register','profile','watchlist',"subsinfo"].includes(newVal)) {
                    this.navbarOn = false
                } else {
                    this.navbarOn = true
                }
            }
        ) 
    }
  
}
</script>

<template>
    <div>
        <PreloaderVue v-show="isLoading"/>
        <Navbar v-if="navbarOn"/>
        <router-view></router-view>
    </div>
</template>