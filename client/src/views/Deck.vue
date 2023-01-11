<script>
import Sidebar from '../components/Sidebar.vue'
import DeckTable from '../components/DeckTable.vue'
import { mapActions, mapState } from 'pinia';
import { mainFunction } from '../stores/main';
import { RouterLink, RouterView } from 'vue-router'
export default {
    components: { Sidebar, DeckTable },
    computed: {
        ...mapState(mainFunction, ['myDecks'])
    },
    data(){
        return {
            name: ''
        }
    },
    methods: {
        ...mapActions(mainFunction, ['getMyDeck', 'newDeck']),
        addDeck (){
            this.newDeck(this.name)
        }
    },
    created(){
        this.getMyDeck()
    }
}
</script>

<template>
    <div class="d-flex col">
        <Sidebar />
        <div class="flex flex-col justify-center items-center overflow-y-auto col-9">
            <div class="thebg thePad text-center">
                <h2>Deck</h2>
                <form @submit.prevent="addDeck">
                    <div class="form-outline mb-4  d-flex justify-content-center">
                        <div class="col-sm-5" style="margin-right: 10px;">
                            <input type="text" id="loginName" class="form-control"
                                style="background: rgba(255, 255, 255, 0.3)" placeholder="New Deck Name" v-model="name"/>
                        </div>
                        <button type="submit" class="btn btn-dark">Add</button>
                    </div>
                </form>
                <br><br>
                <h2>Your Deck</h2>
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <DeckTable v-for="(myDeck, index) in myDecks" :key="myDeck"  :index="index" :myDeck="myDeck"/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>>
</template>

<style scoped>
.thebg {
    background: rgba(255, 255, 255, 0.3)
}

.thePad {
    padding: 30px;
    margin: 30px auto;
}
</style>