<script>
import { mapWritableState } from 'pinia';
import { useRootStore } from '../stores';
export default {
    props: ['cardValue'],
    computed : {
        ...mapWritableState(useRootStore,['quoteCurrency','baseCurrency']),
        theQuote(){
            return this.cardValue.name.split('/')[1]
        },
        theBase(){
            return this.cardValue.name.split('/')[0]
        }
    },
    methods: {
        cardIsClicked() {
            console.log(`card with value : ${this.theQuote} is clicked`)
            this.quoteCurrency = this.theQuote
            this.baseCurrency = this.theBase
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
                <div class="float-end" style="margin-top: 40%;">
                    <a href="#" @click.prevent="cardIsClicked">
                        <i class="material-icons" style="font-size:36px">search</i>
                    </a>
                </div>
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