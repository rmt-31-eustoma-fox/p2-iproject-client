<script>

import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores/main'
import SliderComp from '../components/SliderComp.vue'

export default {
    components: {
        SliderComp
    },
    computed: {
        ...mapState(useMainStore, ["filterByPG","moviesChecker","filterByReleaseDate","topMovies","filterByRating","filterByReviewer"])
    },
    methods: {
        ...mapActions(useMainStore,["getMovies"]),
    },
    created() {
        this.getMovies();
    }
}
</script>

    

<template>
    <div class="px-8 bg-[#0f1929] text-white space-y-8">
        <SliderComp :moviesChecker="topMovies" type="main"/>
        <div class="space-y-6 py-12">
            <h4 class="text-3xl">Newest Movies</h4>
            <SliderComp :moviesChecker="filterByReleaseDate" type="submain"/>
        </div>
        <div class="space-y-6 py-12">
            <h4 class="text-3xl">Highest Ratings</h4>
            <SliderComp :moviesChecker="moviesChecker" type="submain"/>
        </div>
        <div class="space-y-6 py-12">
            <h4 class="text-3xl">Highest Reviewers</h4>
            <SliderComp :moviesChecker="filterByReviewer" type="submain"/>
        </div>
        <div class="space-y-6 py-12">
            <h4 class="text-3xl">Child Movie</h4>
            <SliderComp :moviesChecker="filterByPG" type="submain"/>
        </div>
        <footer class="flex space-x-4 bg-[#121e30] p-4">
            <a>Contact Us</a>
        </footer>
    </div>
</template>