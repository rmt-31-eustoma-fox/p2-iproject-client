<script>
import { mapActions, mapState } from 'pinia';
import { useRootStore } from '../stores';
export default {
    methods : {
        ...mapActions(useRootStore,['fetchNews','fetchForexPair'])
    },
    computed : {
        ...mapState(useRootStore,['theForexPair'])
    }
}
</script>

<template>
    <nav class="navbar fixed-top bg-dark" data-bs-theme="dark">
        <div class="container">
            <span class="navbar-brand mb-0 h1">MyCurenci</span>
            <div class="d-flex gap-2">
                <button class="btn btn-outline-primary" :class="{ disabled: (theForexPair.length < 5) }" type="button" @click.prevent="fetchForexPair">mGraph</button>
                <button class="btn btn-outline-warning" :class="{ disabled: (theForexPair.length < 5) }" type="button" @click.prevent="fetchNews">mNews</button>
            </div>
        </div>
    </nav>
</template>