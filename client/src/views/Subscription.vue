<script>
import { mapActions } from 'pinia'
import { useMainStore } from '../stores/main'
export default {
    methods: {
        ...mapActions(useMainStore, ["subscription"]),
        subs(amount,recurPlan) {
            this.subscription({amount,recurPlan})
        }
    }
}
</script>

<template>
    <div class="flex bg-black overflow-hidden">
        <div class="basis-1/3">
            <img src="../assets/subscriptionpage.jpg" alt="" class="h-[90vh] ml-48">
        </div>
        <div class="basis-2/3 bg-[#0f1929] flex justify-center items-center">
            <div class="text-white bg-[#121e30] rounded p-8">
                <h2 class="text-4xl">Subscription</h2>
                <p class="text-lg">Access Premium Content with newest and fresh movies out there</p>
                <div class="flex space-x-8 mt-24 w-full">
                    <div @click="subs('50000', 'WEEK')" class="p-4 rounded-lg flex flex-col space-y-2 bg-[#14243e] w-1/2 cursor-pointer">
                        <h3 class="text-2xl">Weekly</h3>
                        <h4 class="text-xl self-end">Rp.50.000</h4>
                    </div>
                    <div @click="subs('149000', 'MONTH')" class="p-4 rounded-lg flex flex-col space-y-2 bg-[#14243e] w-1/2 cursor-pointer">
                        <h3 class="text-2xl">Monthly</h3>
                        <h4 class="text-xl self-end">Rp.149.000</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>