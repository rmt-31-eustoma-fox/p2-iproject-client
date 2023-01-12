<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useMainStore } from '../stores/main'

export default {
    methods: {
        ...mapActions(useMainStore, ["getUserBio", "changePage"]),
        logOut() {
            localStorage.clear()
            this.isLogin = false;
            this.changePage("/");
        }
    },
    computed: {
        ...mapState(useMainStore, ["user"]),
        ...mapWritableState(useMainStore, ["isLogin"]),
        formatDate() {
            if(!this.user?.birthDate) return null;
            const date = new Date(this.user?.birthDate);
            return date;
        }
    },
    created() {
        this.getUserBio();
    }
}
</script>

<template>
    <div class="w-full grid grid-cols-6 grid-rows-[repeat(7,minmax(0,10rem))] gap-x-8">
        <img v-if="!user.avatar" src="https://api.dicebear.com/5.x/adventurer-neutral/svg?seed=Aneka" alt="" class="h-[95%] self-center justify-self-center col-start-1 col-end-3 row-start-1 row-end-5 rounded-full object-center">
        <img v-else :src="user.avatar" alt="" class="h-[95%] self-center justify-self-center col-start-1 col-end-3 row-start-1 row-end-5 rounded-full object-center">
        <div class="flex flex-col space-y-1 self-center col-start-3 col-end-5 row-start-1 row-end-2">
            <h5 class="text-xl">First Name</h5>
            <p class="ml-2 text-lg">{{ user.firstName }}</p>
        </div>
        <div class="flex flex-col space-y-1 self-center col-start-3 col-end-5 row-start-2 row-end-3">
            <h5 class="text-xl">Second Name</h5>
            <p class="ml-2 text-lg">{{ user.lastName }}</p>
        </div>
        <div class="flex flex-col space-y-1 self-center col-start-3 col-end-5 row-start-3 row-end-4">
            <h5 class="text-xl">Birth Date</h5>
            <p class="ml-2 text-lg" :class="{'text-yellow-200 font-semibold':!user.birthDate}">{{ formatDate ?? "Not set yet" }}</p>
        </div>
        <div class="flex flex-col space-y-1 self-center col-start-3 col-end-5 row-start-4 row-end-5">
            <h5 class="text-xl">Gender</h5>
            <p class="ml-2 text-lg" :class="{'text-yellow-200 font-semibold':!user.gender}">{{ user.gender ?? "Not set yet" }}</p>
        </div>
        <div class="flex flex-col space-y-1 self-center col-start-3 col-end-5 row-start-5 row-end-6">
            <h5 class="text-xl">Email</h5>
            <p class="ml-2 text-lg">{{ user.email }}</p>
        </div>
        <div class="flex flex-col space-y-1 self-center col-start-3 col-end-5 row-start-6 row-end-7">
            <h5 class="text-xl">Subscibed</h5>
            <div v-if="user.role === 'User'" class="ml-2">
                <p class="text-md text-gray-400">Non Subscriber</p>
                <p>Subscribe <a @click.prevent="changePage('/subscription')" class="text-blue-500 cursor-pointer">here</a></p>
            </div>
            <div v-else>
                <p class="text-md text-blue-500">Subscribed</p>
            </div>
        </div>
        <button class="col-start-1 col-end-2 row-start-5 row-end-6 bg-yellow-600 p-1 h-2/3 w-4/5 place-self-center rounded-lg ">Edit Profile Picture</button>
        <button class="col-start-2 col-end-3 row-start-5 row-end-6 bg-yellow-600 p-1 h-2/3 w-4/5 place-self-center rounded-lg ">Edit Profile Data</button>
        <button @click="logOut" class="col-start-1 col-end-3 row-start-6 row-end-7 bg-red-500 p-1 h-2/3 w-2/3 place-self-center rounded-lg ">Log Out</button>
    </div>
</template>