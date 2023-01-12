<script>
import { mapActions } from 'pinia';
import ProfileVue from './Profile.vue'
import { useMainStore } from '../stores/main';

export default {
    components: {
        ProfileVue
    },
    methods: {
        ...mapActions(useMainStore,["changePage"])
    }
    
}
</script>

<template>
    <main class="bg-[#0f1929] flex text-white h-screen">
        <nav class="basis-1/5 row-span-full col-start-1 col-end-2 flex flex-col space-y-8 bg-primary p-4">
            <div class=" mb-8 self-center cursor-pointer" @click="changePage('/')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-16 h-16">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </div>
            <div @click="changePage('profile')" class="flex space-x-2 items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <h4 class="text-xl">Profile</h4>
            </div>
            <div @click="changePage('watchlist')" class="flex items-center space-x-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <h4 class="text-xl">Watch List</h4>
            </div>
        </nav>
        <router-view></router-view>
    </main>
</template>