<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useMainStore } from '../stores/main'
import GenresFormatterVue from '../components/GenresFormatter.vue'

export default {
    components: {
        GenresFormatterVue
    },
    computed: {
        ...mapState(useMainStore, ["formatDate"]),
        ...mapWritableState(useMainStore,["user"])
    },
    methods: {
        ...mapActions(useMainStore, ["getUserBio","changePage"])
    },
    beforeRouteEnter(to,from,next) {
        next(vm => vm.getUserBio())
    },
    beforeRouteLeave(to,from,next) {
        this.user = [];
        next();
    }
}
</script>

<template>
    <div class="flex flex-col space-y-10 w-full px-8 py-16">
        <h4 class="text-4xl">Watch List</h4>
        <div v-if="user?.watchList?.length === 0">
            <h1 class="text-2xl">No WatchList</h1>
        </div>
        <div v-else v-for="item in user.watchList" :key="item._id" class="flex w-full justify-between">
            <div class="flex space-x-8 cursor-pointer" @click.prevent="changePage(`/movie/${item._id}`)">
                <div>
                    <img v-if="item?.image" :src="item.image" alt="" class="h-60">
                    <img v-else src="https://dummyimage.com/600x400/000/fff&text=No+Image" alt="No Image" class="h-60">
                </div>
                <div class="flex flex-col space-y-6 items-start">
                    <h3 class="text-3xl">{{ item?.title || "" }}</h3>
                    <div v-if="item?.genres" class="text-lg space-x-4 -ml-1">
                        <GenresFormatterVue :genres="item.genres" />
                    </div>
                    <p class="text-xl font-semibold">{{ formatDate(item?.releaseDate) || "" }}</p>
                </div>
            </div>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </span>
        </div>
    </div>
</template>