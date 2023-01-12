<script>
import { useCounterStore } from '../stores/counter'
import { mapActions, mapWritableState } from 'pinia'
import Card from "../components/Card.vue"

export default {
    components: {
        Card
    },
    methods: {
        ...mapActions(useCounterStore, ["fetchTransaction"])
    },
    computed: {
        ...mapWritableState(useCounterStore, ["transactions"])
    },
    created() {
        this.fetchTransaction()
    }
}
</script>

<template>
    <Card 
    v-for="transaction in transactions"
    :key="transaction.id"
    :transaction="transaction"
    />
</template>