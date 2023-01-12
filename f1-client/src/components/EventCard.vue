<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    props: ['el', 'index'],
    methods: {
        ...mapActions(useCounterStore, ['findEvent']),
        details(id){
            this.findEvent(id)
        }
    }
}
</script>

<template>
    <div class="card text-bg-dark mb-3" style="width: 18rem; margin-right: 5px;">
        <!-- <img :src="el.image" class="card-img-top" style="display: flex; -ms-flex-align: center;"> -->
        <div class="card-body">
            <h6>Round: {{ index+1 }}</h6>
            <h5 class="card-title">{{ el.gpName }}</h5>
            <p class="card-text">{{ el.circuitName }}</p>
            <a href="#" class="btn btn-danger" style="margin-right: 10px;" @click.prevent="details(el.id)">Details</a>
        </div>
    </div>
</template>