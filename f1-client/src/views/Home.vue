<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import EventCard from '../components/EventCard.vue'

export default {
    components: {
        EventCard
    },
    computed: {
        ...mapWritableState(useCounterStore, ['events'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchEvent'])
    },
    created(){
        this.fetchEvent()
    }
}
</script>

<template>
    <section>
    
        <div style="display: flex; flex-wrap: nowrap; padding: 5px 60px;">
            <div style="display: flex; flex-wrap: wrap; margin-left: 70px; margin-top: 20px;">
                <EventCard v-for="(el, index) in events" :key="el.id" :el="el" :index="index" />
            </div>
        </div> 

    </section>
</template>