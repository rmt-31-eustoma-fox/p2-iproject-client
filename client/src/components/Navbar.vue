<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores/main';
export default {
    methods: {
        ...mapActions(useMainStore, ["changePage", "getUserBio"])
    },
    computed: {
        ...mapState(useMainStore, ["isLogin", "user"])
    },
    created() {
        this.getUserBio();
    }
}
</script>

<template>
        <nav class="h-[10vh] bg-primary flex p-4 justify-between text-white items-baseline">
            <div @click="changePage('/')">
                <h5 class="text-orange-200 text-2xl">test</h5>
            </div>
            <div v-show="!isLogin" class="flex space-x-4 items-center">
                <a @click.prevent="changePage('/login')" class="text-xl cursor-pointer" >Log In</a>
                <a @click.prevent="changePage('/register')" class="text-xl cursor-pointer" >Register</a>
            </div>
            <div v-show="isLogin" class="flex space-x-4 items-center">
                <button class="py-1 px-2 bg-blue-500 text-white rounded cursor-pointer">Subscribe</button>
                <img @click="changePage('/user/profile')" v-if="!user.avatar" src="https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Aneka" alt="" class="h-8 rounded-full cursor-pointer">
                <img v-else :src="user.avatar" alt="" @click="changePage('/user/profile')" class="h-8 rounded-full cursor-pointer">
            </div>
        </nav>
</template>