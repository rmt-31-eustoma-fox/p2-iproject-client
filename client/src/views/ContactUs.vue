<script>
import { mapActions } from 'pinia'
import { useMainStore } from '../stores/main'
export default {
    methods: {
        ...mapActions(useMainStore, ["emailClient"]),
        sendE() {
            this.emailClient({clientEmail:this.email,subject:this.subject,description:this.desc})
        }
    },
    data() {
        return {
            email:"",
            subject:"",
            desc:""
        }
    }
}
</script>

<template>
    <div class="flex justify-center items-center bg-[#0f1929] h-[90vh] text-white">
        <div class="flex flex-col space-y-8 w-1/3">
            <h1 class="text-4xl self-center">Contact Us</h1>
            <form @submit.prevent="sendE" class="flex flex-col space-y-10 w-full">
                <div class="w-full relative">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder=" "
                        v-model="email"
                        class="cursor-text text-white peer p-2 border-b bg-transparent focus:outline-0 border-gray-400 w-full focus:placeholder:hidden"
                    />
                    <label
                        for="email"
                        class="w-1/3 cursor-text transition-all text-white absolute top-1.5 left-2 -translate-y-5 peer-focus:-translate-y-5 text-xs peer-focus:text-xs peer-focus:-translate-x-1 -translate-x-1 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:translate-x-0.5 peer-placeholder-shown:text-base"
                    >Email Address</label
                    >
                </div>
                <div class="w-full relative">
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder=" "
                        v-model="subject"
                        class="cursor-text text-white peer p-2 border-b bg-transparent focus:outline-0 border-gray-400 w-full focus:placeholder:hidden"
                    />
                    <label
                        for="subject"
                        class="w-1/3 cursor-text transition-all text-white absolute top-1.5 left-2 -translate-y-5 peer-focus:-translate-y-5 text-xs peer-focus:text-xs peer-focus:-translate-x-1 -translate-x-1 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:translate-x-0.5 peer-placeholder-shown:text-base"
                    >Subject</label
                    >
                </div>
                <div class="w-full relative mt-2">
                    <textarea v-model="desc" id="desc" rows="4" class="block peer p-2.5 w-full text-white bg-transparent rounded-lg border border-gray-400 focus:outline-0 focus:ring-blue-500 focus:border-blue-500" placeholder=" "></textarea>
                    <label for="desc" class="transition-all text-white absolute top-1.5 left-1.5 -translate-y-6 peer-focus:-translate-y-6 text-xs peer-focus:text-xs peer-focus:-translate-x-1 -translate-x-1 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:translate-x-0.5 peer-placeholder-shown:text-base">Description</label>
                </div>
                <button class="bg-blue-500 py-2 px-4 rounded w-1/2 self-center">Send</button>
            </form>
        </div>
    </div>
</template>