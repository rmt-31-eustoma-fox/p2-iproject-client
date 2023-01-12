<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    // data(){
    //     return {
    //         date: this.eventPick.date
    //     }
    // },
    computed: {
        ...mapWritableState(useCounterStore, ['eventPick'])
    },
    methods: {
        ...mapActions(useCounterStore, ['findEvent', 'midtransPayment'])
    },
    created(){
        this.findEvent(this.$route.params.id)
        // this.midtransPayment()
    }
}
</script>

<template>
    <div class="container" style="margin-bottom: 20px;">
        <div>
            <h1 style="text-align: center;">{{ eventPick.gpName }}</h1>
            <div>
                <div>
                    <img :src="eventPick.image" alt="product image" class="img-fluid rounder" style="display: block; margin-left: auto; margin-right: auto;">
                </div>
                <div>
                    <h5 style="text-align: center;">Circuit: {{ eventPick.circuitName }}</h5>
                    <p style="text-align: center;">{{ eventPick.city }}, {{ eventPick.country }}</p>
                    <p style="text-align: center;">Laps: {{ eventPick.laps }}, Distance: {{ eventPick.distance }}</p>
                    <p style="text-align: center; text-decoration: overline; color: hsla(160, 100%, 37%, 1);">RACING DATE</p>
                    <p style="text-align: center;">{{ eventPick.date.toLocaleString('en-GB', { timeZone: 'UTC' }) }}</p>
                </div>
                <div style="margin: auto; width: 50%;">
                    <RouterLink :to="'/ticket'" class="btn btn-success" style="margin-right: 10px;">Book Ticket(s)</RouterLink>
                    <RouterLink :to="'/'" class="btn btn-warning">Cancel</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>