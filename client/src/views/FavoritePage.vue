<script>
import Card from '../components/Card.vue'
import Navbar from '../components/Navbar.vue'
import { useCounterStore } from '../stores/counter';
import { mapState, mapActions } from 'pinia';
export default {
    components : {
        Card,
        Navbar
    },
    computed : {
        ...mapState(useCounterStore,['favoriteList'])
    },
    methods : {
        ...mapActions(useCounterStore,['getDataFavorite'])
    },
    created(){
        this.getDataFavorite()
    }
}
</script>


<template>
    <Navbar />
    <div class="row row-cols-1 row-cols-md-3 g-4 p-2 m-2">
        <!-- <div class="col">
            <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div> -->
        <Card v-for="item in favoriteList" :key="item.id" :item="item" />
    </div>
</template>