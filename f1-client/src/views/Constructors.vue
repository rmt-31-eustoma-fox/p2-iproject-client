<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import ConstructorCard from '../components/ConstructorCard.vue'

export default{
    components: {
        ConstructorCard
    },
    computed: {
        ...mapWritableState(useCounterStore, ['teams'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchTeam'])
    },
    created(){
        this.fetchTeam()
    }
}
</script>

<template>
    <section>
    
    <div style="display: flex; flex-wrap: nowrap; padding: 5px 60px;">
        <div style="display: flex; flex-wrap: wrap; margin-left: 70px; margin-top: 20px;">
            <ConstructorCard v-for="cons in teams" :key="cons.id" :cons="cons" />
        </div>
    </div> 

</section>
</template>