<script>
import { mapState } from 'pinia';
import NewsCard from './NewsCard.vue'
import { useRootStore } from '../stores';
export default {
    components: {
        NewsCard
    },
    computed: {
        ...mapState(useRootStore, ['theNews'])
    }
}
</script>

<template>
    <h1>News</h1>
    <div class="row ">
        <NewsCard v-for="(eachNews, idx) in theNews" :cardValue="eachNews" />
    </div>
</template>