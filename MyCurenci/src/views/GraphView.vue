<script>
import { mapState,mapActions } from 'pinia';
import { useRootStore } from '../stores';
import Graph from '../components/Graph.vue'
export default {
    data() {
        return {
            chartProperties: {
                width: 950,
                height: 300,
                timeScale: {
                    timeVisible: true,
                    secondVisible: false,
                }
            },
        }
    },
    components: {
        Graph
    },
    computed: {
        ...mapState(useRootStore, ['theValue','quoteCurrency'])
    },
    methods:{
        ...mapActions(useRootStore,['fetchForexPair']),
        fitContent(){
            this.$refs.drawGraph.fitContent()
        },
        getChart(){
            return this.$refs.drawGraph.getChart()
        }
    },
    created(){
        // this.fetchForexPair()
        console.log('create graphview')
    },
}
</script>
<template>
    <Graph :type="'candlestick'" :autosize="false" :data="theValue" :chartOptions="chartProperties" ref="drawGraph"/>
</template>