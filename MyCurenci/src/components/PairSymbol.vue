<script>
import { mapState, mapActions, mapWritableState } from 'pinia';
import { useRootStore } from '../stores';
export default {
    computed: {
        ...mapState(useRootStore, ['currencies','theForexPair']),
        ...mapWritableState(useRootStore,['baseCurrency','quoteCurrency']),
    },
    methods: {
        ...mapActions(useRootStore, ['fetchForexPair', 'fetchNews','fetchLatestExc']),
    },
    watch : {
        baseCurrency: {
            handler(newValue, oldValue){
                console.log({newValue, oldValue})
                // if(newValue !== '') this.fetchLatestExc()
            }
        }
    }
}
</script>

<template>
    <div class="col-5">
        <div class="form-floating">
            <select class="form-select" id="fromSelect" aria-label="Floating label select from" v-model="baseCurrency">
                <option value="" selected disabled>Select Base</option>
                <template v-for="(currency, idx) in currencies" :key="idx">
                    <option :value="currency.symbol">{{ currency.symbol }} ( {{ currency.name }})</option>
                </template>
            </select>
            <label for="floatingSelect">Base</label>
        </div>
    </div>
    <div class="col-5">
        <div class="form-floating mb-3">
            <select class="form-select" id="toSelect" aria-label="Floating label select to" v-model="quoteCurrency">
                <option value="" selected disabled>Select Quote</option>
                <template v-for="(currency, idx) in currencies" :key="idx">
                    <option :value="currency.symbol">{{ currency.symbol }} ( {{ currency.name }})</option>
                </template>
            </select>
            <label for="floatingSelect">Quote</label>
        </div>
    </div>
    <div class="col-2">
        <div class="d-grid">
            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                <a class="btn btn-primary float-end btn-sm" :class="{ disabled: (theForexPair.length < 5) }" type="submit"
                    @click.prevent="fetchForexPair">Get Graph</a>
                <!-- <router-link class="btn btn-secondary float-end btn-sm" :to="{name:'news'}">Get News</router-link> -->
                <a class="btn btn-secondary float-end btn-sm" :class="{ disabled: (theForexPair.length < 5) }"
                    @click.prevent="fetchNews">Get News</a>
            </div>
            <!-- <router-link :to="{name:'home'}">Test</router-link> -->
        </div>
    </div>
</template>