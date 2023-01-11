<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { mainFunction } from '../stores/main';
import Images from '../components/Images.vue'
import Option from '../components/Option.vue'
import SearchCard from '../components/SearchCard.vue'

export default {
    components: {
        Images, Option, SearchCard
    },
    computed: {
        ...mapState(mainFunction, ['cardDecks', 'deckName', 'selectedCard', 'cards']),
        ...mapWritableState(mainFunction, ['query'])
    },
    methods: {
        ...mapActions(mainFunction, ['theDeck', 'selectCard', 'getCards', 'editCard', 'deleteCard']),
        mouse(cardid) {
            this.selectCard(cardid)
        },
        clickAdd(id){
            this.editCard(this.$route.params.deckid, id)
        },
        clickDelete(id){
            this.deleteCard(this.$route.params.deckid, id)
        }
    },
    created() {
        this.theDeck(this.$route.params.deckid)
    },
    data() {
        return {
            searchType: 'All Cards',
            monsterSearch: ['Normal Monster', 'Normal Tuner Monster', 'Effect Monster', 'Tuner Monster', 'Flip Monster', 'Flip Effect Monster', 'Flip Tuner Effect Monster', 'Spirit Monster', 'Union Effect Monster', 'Gemini Monster', 'Pendulum Effect Monster', 'Pendulum Normal Monster', 'Pendulum Tuner Effect Monster', 'Ritual Monster', 'Ritual Effect Monster', 'Toon Monster', 'Fusion Monster', 'Synchro Monster', 'Synchro Tuner Monster', 'Synchro Pendulum Effect Monster', 'XYZ Monster', 'XYZ Pendulum Effect Monster', 'Link Monster', 'Pendulum Flip Effect Monster', 'Pendulum Effect Fusion Monster', 'Token'],
            monsterType: ['Aqua', 'Beast', 'Beast-Warrior', 'Creator-God', 'Cyberse', 'Dinosaur', 'Divine-Beast', 'Dragon', 'Fairy', 'Fiend', 'Fish', 'Insect', 'Machine', 'Plant', 'Psychic', 'Pyro', 'Reptile', 'Rock', 'Sea Serpent', 'Spellcaster', 'Thunder', 'Warrior', 'Winged Beast', 'Wyrm', 'Zombie'],
            monsterAttributes: ['dark', 'earth', 'fire', 'light', 'water', 'wind', 'divine'],
            spellTypes: ['Normal', 'Field', 'Equip', 'Continuous', 'Quick-Play', 'Ritual'],
            trapTypes: ['Normal', 'Continuous', 'Counter'],
            banlists: ['tcg', 'ocg', 'goat'],
            sorts: ['ATK', 'DEF', 'Name', 'Type', 'Level', 'ID', 'New', 'Relevance']
        }
    }
}
</script>
<template>
    <div class="d-flex col text-center text-white">
        <div class="col-3">
            <div class="border border-slate-800 bg-slate-900/70 mt-3 p-5">
                <div class="flex justify-between">
                    <h2 class="font-bold text-3xl mb-3">{{ selectedCard.name }}</h2>
                </div>
                <img :src=selectedCard.image_url alt="" style="width: 200px;">
                <p class="text-white text-justify border border-slate-800" style="width: 200px; margin: 10px auto;">{{
                    selectedCard.desc
                }}</p>
            </div>
        </div>
        <div class="col-6">
            <div class="border border-slate-800 bg-slate-900/70 mt-3 p-5">
                <div class="flex justify-between">
                    <h1 class="font-bold text-3xl mb-3">{{ deckName }}</h1>
                </div>
                <div class="flex d-flex flex-row">
                    <Images v-for="cardDeck in cardDecks" :key="cardDeck.id" :cardDeck="cardDeck"
                        @mouseenter="mouse(cardDeck.CardId)" @click="clickDelete(cardDeck.id)"/>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="border border-slate-800 bg-slate-900/70 mt-3 p-5">
                <div class="flex justify-between">
                    <h2 class="font-bold text-3xl mb-3">Search Card</h2>
                    <form @submit.prevent="getCards">
                        <div class="form-outline mb-4  d-flex justify-content-center">
                            <div>
                                <input type="text" style="background: rgba(255, 255, 255, 0.3)"
                                    placeholder="Enter cards name" />
                            </div>
                        </div>
                        <div>
                            <select class="mb-4" aria-label=".form-select-lg example"
                                style="background: rgba(255, 255, 255, 0.3)" v-model="searchType">
                                <option value="All Cards" selected>All Cards</option>
                                <option value="Monster">Monster Cards</option>
                                <option value="Spell">Spell Cards</option>
                                <option value="Trap">Trap Cards</option>
                            </select>
                        </div>
                        <div v-if="searchType == 'Monster'">
                            <select class="mb-4" aria-label=".form-select-lg example"
                                style="background: rgba(255, 255, 255, 0.3)" v-model="query.type">
                                <option value="" selected>Monster Type</option>
                                <Option v-for="monsterType in monsterSearch" :key="monsterType"
                                    :monsterType="monsterType" />
                            </select>
                        </div>
                        <div v-if="searchType == 'Monster'">
                            <select class="mb-4" aria-label=".form-select-lg example"
                                style="background: rgba(255, 255, 255, 0.3)" v-model="query.race">
                                <option value="" selected>Monster Race</option>
                                <Option v-for="monsterRace in monsterType" :key="monsterRace"
                                    :monsterRace="monsterRace" />
                            </select>
                        </div>
                        <div v-if="searchType == 'Monster'">
                            <select class="mb-4" aria-label=".form-select-lg example"
                                style="background: rgba(255, 255, 255, 0.3)" v-model="query.type">
                                <option value="" selected>Monster Attribute</option>
                                <Option v-for="monsterAttribute in monsterAttributes" :key="monsterAttribute"
                                    :monsterAttribute="monsterAttribute" />
                            </select>
                        </div>
                        <div v-if="searchType == 'Spell'">
                            <select class="mb-4" aria-label=".form-select-lg example"
                                style="background: rgba(255, 255, 255, 0.3)" v-model="query.race">
                                <option value="" selected>Spell Type</option>
                                <Option v-for="spellType in spellTypes" :key="spellType" :spellType="spellType" />
                            </select>
                        </div>
                        <div v-if="searchType == 'Trap'">
                            <select class="mb-4" aria-label=".form-select-lg example"
                                style="background: rgba(255, 255, 255, 0.3)" v-model="query.race">
                                <option value="" selected>Trap Type</option>
                                <Option v-for="trapType in trapTypes" :key="trapType" :trapType="trapType" />
                            </select>
                        </div>
                        <div>
                            <select class="mb-4" aria-label=".form-select-lg example"
                                style="background: rgba(255, 255, 255, 0.3)" v-model="query.banlist">
                                <option value="" selected>Banlist</option>
                                <Option v-for="banlist in banlists" :key="banlist" :banlist="banlist" />
                            </select>
                        </div>
                        <div class="form-outline mb-4  d-flex justify-content-center">
                            <div>
                                <input type="text" style="background: rgba(255, 255, 255, 0.3)"
                                    placeholder="Enter effect" v-model="query.desc" />
                            </div>
                        </div>
                        <div v-if="searchType == 'Monster'" class="form-outline mb-4  d-flex justify-content-center">
                            <div>
                                <input type="number" style="background: rgba(255, 255, 255, 0.3)" min="0"
                                    placeholder="Attack" v-model="query.atk" />
                            </div>
                        </div>
                        <div v-if="searchType == 'Monster'" class="form-outline mb-4  d-flex justify-content-center">
                            <div>
                                <input type="number" style="background: rgba(255, 255, 255, 0.3)" min="0"
                                    placeholder="Defense" v-model="query.def" />
                            </div>
                        </div>
                        <div v-if="searchType == 'Monster'" class="form-outline mb-4  d-flex justify-content-center">
                            <div>
                                <input type="number" style="background: rgba(255, 255, 255, 0.3)" min="0"
                                    placeholder="Level" v-model="query.level" />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-dark">Search</button>
                    </form>
                </div>
            </div>
            <div class="container-fluid border">
                <div class="row d-flex flex-wrap">
                    <SearchCard v-for="card in cards" :key="card.id" :card="card" @mouseenter="mouse(card.id)" @click="clickAdd(card.id)"/>
                </div>
            </div>
        </div>
    </div>>
</template>

<style scoped>

</style>