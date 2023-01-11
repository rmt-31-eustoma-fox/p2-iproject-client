<script>
import { mapState,mapActions } from 'pinia';
import { useRootStore } from '../stores';
import Graph from '../components/Graph.vue'
import Loading from '../components/Loading.vue';
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
        Graph, Loading
    },
    computed: {
        ...mapState(useRootStore, ['theValue','quoteCurrency','isLoadingGraph','theForexPair'])
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
    <div :class="{myStyle : isLoadingGraph}">
        <Graph v-if="!isLoadingGraph" :type="'candlestick'" :autosize="false" :data="theValue" :chartOptions="chartProperties" ref="drawGraph" :theForexPair="theForexPair"/>
        <Loading v-else />
    </div>
</template>
<style scoped>
.myStyle {
    text-align: center;
}
</style>