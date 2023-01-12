<script>
import { mapState } from 'pinia';
import CurrencyCard from '../components/CurrencyCard.vue'
import { useRootStore } from '../stores';
export default {
    components: {
        CurrencyCard
    },
    computed: {
        ...mapState(useRootStore, ['exchangeValue']),
        startIndex() {
            return (this.pageNumber - 1) * 4
        },
        endIndex() {
            return (this.pageNumber * 4)
        },
        maxPage() {
            return Math.ceil(this.exchangeValue.length / 4)
        }
    },
    data() {
        return {
            pageNumber: 1,
            listToShow: []
        }
    },
    methods: {
        toPaginate() {
            this.listToShow = this.exchangeValue.slice(this.startIndex, this.endIndex)
        },
        changePage(value){
            this.pageNumber = value
        }
    },
    beforeMount() {
        this.toPaginate()
    },
    watch: {
        pageNumber: {
            handler(newValue, oldValue) {
                this.toPaginate()
            }
        }
    }
}
</script>

<template>
    <nav aria-label="Page navigation example" style="margin-left : 20px; margin-bottom: 0;">
        <ul class="pagination">
            <li class="page-item" :class="{disabled : (pageNumber-1) === 0}">
                <a class="page-link" href="#" @click.prevent="changePage(1)">First</a>
            </li>
            <li class="page-item" :class="{disabled : (pageNumber-1) === 0}"><a class="page-link" href="#" @click.prevent="changePage(pageNumber-1)">{{ pageNumber - 1 }}</a></li>
            <li class="page-item active"><span class="page-link" href="#">{{ pageNumber}}</span></li>
            <li class="page-item" :class="{disabled : (pageNumber) === maxPage}"><a class="page-link" href="#" @click.prevent="changePage(pageNumber+1)">{{ pageNumber + 1}}</a></li>
            <li class="page-item" :class="{disabled : (pageNumber) === maxPage}">
                <a class="page-link" href="#" @click.prevent="changePage(maxPage)">Last</a>
            </li>
        </ul>
    </nav>
    <!-- <input type="number" min="1" :max="maxPage" name="page" id="page" v-model="pageNumber"> -->
    <div class="card-columns g-2">
        <CurrencyCard v-for="(currency, idx) in listToShow" :key="idx" :cardValue="currency" />
    </div>

</template>