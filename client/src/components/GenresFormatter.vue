<script>
import { mapState } from 'pinia'
import { useMainStore } from '../stores/main';
export default {
    props:["genres"],
    computed: {
        ...mapState(useMainStore, ["backgroundColorGenres","formatGenresBackground"]),
        formatGenre() {
            return this.genres.slice(0,3);
        }
    }
}
</script>

<template>
    <div>
        <span v-for="(val,key,idx) in formatGenresBackground(formatGenre)" :key="idx" :class="val" class="inline-block p-1 mx-1 rounded">
            {{ key }}
        </span>
    </div>
</template>