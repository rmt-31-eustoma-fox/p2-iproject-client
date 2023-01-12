<script>
import { mapActions } from 'pinia';
import { useMainStore } from '../stores/main';
export default {
    methods: {
        ...mapActions(useMainStore,["updateSubscription", "changePage"])
    },
    created() {
        if(this.$route.params.paymentInfo === "success") {
            this.updateSubscription()
        }
        // console.log(this.$route);
    }
}
</script>

<template>
    <div class="flex justify-center items-center h-screen bg-[#0f1929] text-white">
        <div class="flex flex-col space-y-10">
            <template v-if="this.$route.params.paymentInfo === 'success'">
                <h3 class="text-4xl">Your subscription payment success</h3>
                <p class="text-lg">Now you can access premium movies and the latest one</p>
            </template>
            <template v-if="this.$route.params.paymentInfo === 'failure'">
                <h3 class="text-4xl">Your subscription payment fail</h3>
                <p class="text-lg">Please try again</p>
            </template>
            <button @click="changePage('/')" class="py-2 px-4 bg-blue-500 w-1/2 self-center">Back to Home</button>
        </div>
    </div>
</template>