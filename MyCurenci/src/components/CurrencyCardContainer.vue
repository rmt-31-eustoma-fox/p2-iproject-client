<script>
import { mapState } from 'pinia';
import CurrencyCard from '../components/CurrencyCard.vue'
import { useRootStore } from '../stores';
export default {
    components: {
        CurrencyCard
    },
    computed: {
        ...mapState(useRootStore, ['exchangeValue'])
    }
}
</script>

<template>

    <div class="card-columns g-2" style="overflow-y: auto; height: 80vh;">
        <CurrencyCard v-for="(currency, idx) in exchangeValue" :key="idx" :cardValue="currency" />
    </div>

</template>