<script>
import { mapWritableState } from 'pinia';
import { useRootStore } from '../stores';
export default {
    props: ['cardValue'],
    computed : {
        ...mapWritableState(useRootStore,['quoteCurrency']),
        theQuote(){
            return this.cardValue.name.split('/')[1]
        }
    },
    methods: {
        cardIsClicked() {
            console.log(`card with value : ${this.theQuote} is clicked`)
            this.quoteCurrency = this.theQuote
        }
    }
}
</script>
<template>
    <div class="card mb-3" style="width: 250px;">
        <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
        <!-- <div class="card-body">
        </div> -->
        <div class="row no-gutters">
            <div class="col-md-4">
                <!-- <img src="..." class="card-img" alt="..."> -->
                <a href="#" @click.prevent="cardIsClicked" class="btn btn-outline-primary" style="margin: 50%;">+</a>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ cardValue.name }}</h5>
                    <p class="card-text">{{ cardValue.value }}</p>
                </div>
            </div>
        </div>
    </div>
</template>