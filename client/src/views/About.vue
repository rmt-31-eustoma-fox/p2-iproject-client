<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import Sidebar from '../components/Sidebar.vue'
import QrCode from '../components/QrCode.vue'
import { mainFunction } from '../stores/main';
export default {
    components: { Sidebar, QrCode },
    computed: {
        ...mapState(mainFunction, ['relatedYugiohs', 'qrCodes']),
    },
    methods: {
        ...mapActions(mainFunction, ['getQrCode'])
    },
    created(){
        this.getQrCode()
    }
}
</script>
<template>
    <div class="d-flex col">
        <Sidebar />
        <div class="flex flex-col justify-center items-center overflow-y-auto col-9">
            <div class="thebg thePad text-center">
                <h1>More Relavant Site</h1>
                <div style="display: flex; flex-wrap: wrap; justify-content: center;">
                    <QrCode v-for="(qrCode, index) in qrCodes" :qrCode="qrCode" :key="index"/> 
                </div>
            </div>
        </div>
    </div>
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