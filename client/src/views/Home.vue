<script>
import { mapActions } from 'pinia';
import Sidebar from '../components/Sidebar.vue'
import { mainFunction } from '../stores/main';
export default {
    components: { Sidebar },
    created() {
        this.getMyDeck()
    },
    methods: {
        ...mapActions(mainFunction, ['getCards', 'getMyDeck', 'getUsername'])
    },
    created(){
        this.getUsername()
    }

}
</script>
<template>
    <div class="d-flex col">
        <Sidebar />
        <div class="col-10 ">
            <div class="" style="overflow: scroll;">
                <a class="twitter-timeline" data-width="1400" data-height="600" data-theme="dark"
                    href="https://twitter.com/yugioh?ref_src=twsrc%5Etfw">Tweets by yugioh</a>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>