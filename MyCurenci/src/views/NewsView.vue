<script>
import { mapState } from 'pinia';
import Loading from '../components/Loading.vue';
// import NewsCardContainer from './NewsCardContainer.vue';
import NewsCardContainer from '../components/NewsCardContainer.vue';
import { useRootStore } from '../stores';
export default {
    components : {
        NewsCardContainer, Loading
    },
    computed : {
        ...mapState(useRootStore,['theNews','isLoadingNews'])
    },
    created(){
        console.log('created NewsView')
        // console.log(this.theNews)
    }
}
</script>
<template>
    <div :class="{myStyle : isLoadingNews}">
        <NewsCardContainer v-if="!isLoadingNews"/>
        <Loading v-else />
    </div>
</template>
<style scoped>
.myStyle {
    text-align: center;
}
</style>