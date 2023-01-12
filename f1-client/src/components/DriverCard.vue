<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    props: ['val'],
    methods: {
        ...mapActions(useCounterStore, ['findDriver']),
        driverDet(id){
            this.findDriver(id)
        }
    }
}
</script>

<template>
    <div class="card text-bg-dark mb-3" style="width: 18rem; margin-right: 5px;">
        <img :src="val.image" class="card-img-top" style="display: flex; -ms-flex-align: center;">
        <div class="card-body">
            <h5 class="card-title">{{ val.name }}</h5>
            <p class="card-text">{{ val.Team.name }}</p>
            <a href="#" class="btn btn-danger" style="margin-right: 10px;" @click.prevent="driverDet(val.id)">Details</a>
        </div>
    </div>
</template>