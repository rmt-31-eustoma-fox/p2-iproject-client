<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useMainStore } from '../stores/main'
export default {
    computed: {
        ...mapState(useMainStore, ["formatVideoKey"]),
        ...mapWritableState(useMainStore, ["movieWatch", "isLoading"])
    },
    methods:{
        ...mapActions(useMainStore, ["getOneMovie"])
    },
    created() {
        this.getOneMovie(this.$route.params.movieId)
    },
    beforeRouteLeave(to,from,next) {
        this.movieWatch = [];
        next();
    }
}
</script>

<template>
    <div class="bg-[#0f1929] h-full text-white">
    <div class="px-10 h-[90vh]">
        <vue-plyr v-if="movieWatch.video">
            <div id="player" data-plyr-provider="youtube" :data-plyr-embed-id="movieWatch.video"></div>
        </vue-plyr>
    </div>
    <!-- <div class="h-[20rem] border-t-2 border-gray-200 mt-8 rounded-lg px-6 py-4">
        <h1 class="text-4xl">{{ movieWatch.title }}</h1>
    </div> -->
</div>
</template>