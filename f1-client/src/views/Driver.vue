<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import DriverCard from '../components/DriverCard.vue'

export default {
    components: {
        DriverCard
    },
    computed: {
        ...mapWritableState(useCounterStore, ['drivers'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchDriver'])
    },
    created(){
        this.fetchDriver()
    }
}
</script>

<template>
    <section>
    
        <div style="display: flex; flex-wrap: nowrap; padding: 5px 60px;">
            <div style="display: flex; flex-wrap: wrap; margin-left: 70px; margin-top: 20px;">
                <DriverCard v-for="val in drivers" :key="val.id" :val="val" />
            </div>
        </div> 

    </section>
</template>