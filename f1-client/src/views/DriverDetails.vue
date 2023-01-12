<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    computed: {
        ...mapWritableState(useCounterStore, ['driverDetails'])
    },
    methods: {
        ...mapActions(useCounterStore, ['findDriver'])
    },
    created(){
        this.findDriver(this.$route.params.id)
    }
}
</script>

<template>
    <div class="container" style="margin-bottom: 20px;">
        <div>
            <h1 style="text-align: center;">{{ driverDetails.name }} [{{ driverDetails.abbr }}]</h1>
            <div>
                <div>
                    <img :src="driverDetails.image" alt="product image" class="img-fluid rounder" style="display: block; margin-left: auto; margin-right: auto;">
                </div>
                <div>
                    <h5 style="text-align: center;">Team: {{ driverDetails.Team.name }}</h5>
                    <p style="text-align: center;">{{ driverDetails.countryName }}, {{ driverDetails.countryCode }}</p>
                    <p style="text-align: center;">B.O.D: {{ driverDetails.birthdate }}, Birthplace: {{ driverDetails.birthplace }}</p>
                    <p style="text-align: center; text-decoration: overline; color: hsla(160, 100%, 37%, 1);">RACING RECORD</p>
                    <p style="text-align: center;">World Championships: {{ driverDetails.world_championships }} | Podiums: {{ driverDetails.podiums }}</p>
                </div>
                <div style="margin: auto; width: 50%;">
                    <RouterLink :to="'/drivers'" class="btn btn-warning">Back</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>