<script>
import { mapActions } from 'pinia';
import { useMainStore } from '../stores/main';

export default {
    data() {
        return {
            email:"",
            password:"",
            first:"",
            second:"",
        }
    },
    methods: {
        ...mapActions(useMainStore, ["registerForm", "changePage"]),
        register() {
            this.registerForm({email:this.email,password:this.password,firstName:this.first,lastName:this.second})
        }
    }
    
}
</script>

<template>
    <div class="h-screen relative bg-black">
        <div class="flex h-full">
            <img src="../assets/iron-man-in-the-dark-1ikpgsjkoayh9equ22.png" alt="" class="absolute h-full right-12 z-0 object-contain top-0"/>
             <div class="flex flex-col items-center self-center ml-36 bg-[#1A2B47] py-8 rounded-md w-[45%]">
                <h2 class="text-4xl mb-16 font-semibold text-white">Sign Up</h2>
                <form @submit.prevent="register" class="flex flex-col space-y-8 w-full relative z-30 [&_*]:text-white px-8">
                    <div class="flex space-x-4">
                        <div class="w-full relative">
                        <input
                            type="text"
                            name="first"
                            id="first"
                            placeholder=" "
                            v-model="first"
                            class="cursor-text text-slate-700 peer p-2 border-b bg-transparent focus:outline-0 border-gray-400 w-full focus:placeholder:hidden"
                        />
                        <label
                            for="first"
                            class="w-1/2 cursor-text transition-all text-gray-400 absolute top-1.5 left-2 -translate-y-5 peer-focus:-translate-y-5 text-xs peer-focus:text-xs peer-focus:-translate-x-1 -translate-x-1 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:translate-x-0.5 peer-placeholder-shown:text-base"
                        >First Name</label
                        >
                    </div>
                    <div class="w-full relative">
                        <input
                            type="text"
                            name="second"
                            id="second"
                            placeholder=" "
                            v-model="second"
                            class="cursor-text text-slate-700 peer p-2 border-b bg-transparent focus:outline-0 border-gray-400 w-full focus:placeholder:hidden"
                        />
                        <label
                            for="second"
                            class="w-1/2 cursor-text transition-all text-gray-400 absolute top-1.5 left-2 -translate-y-5 peer-focus:-translate-y-5 text-xs peer-focus:text-xs peer-focus:-translate-x-1 -translate-x-1 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:translate-x-0.5 peer-placeholder-shown:text-base"
                        >Second Name</label
                        >
                    </div>
                    </div>
                    <div class="w-full relative">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder=" "
                            v-model="email"
                            class="cursor-text text-slate-700 peer p-2 border-b bg-transparent focus:outline-0 border-gray-400 w-full focus:placeholder:hidden"
                        />
                        <label
                            for="email"
                            class="w-1/3 cursor-text transition-all text-gray-400 absolute top-1.5 left-2 -translate-y-5 peer-focus:-translate-y-5 text-xs peer-focus:text-xs peer-focus:-translate-x-1 -translate-x-1 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:translate-x-0.5 peer-placeholder-shown:text-base"
                        >Email Address</label
                        >
                    </div>
                    <div class="w-full relative">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder=" "
                            v-model="password"
                            class="text-slate-700 peer p-2 border-b bg-transparent focus:outline-0 border-gray-400 w-full focus:placeholder:hidden"
                        />
                        <label
                            for="password"
                            class="transition-all text-gray-400 absolute top-1.5 left-2 -translate-y-5 peer-focus:-translate-y-5 text-xs peer-focus:text-xs peer-focus:-translate-x-1 -translate-x-1 peer-placeholder-shown:translate-y-1 peer-placeholder-shown:translate-x-0.5 peer-placeholder-shown:text-base"
                        >Password</label
                        >
                    </div>
                    <button 
                        class= "font-semibold self-center inline-block w-1/3 mx-auto py-2 bg-blue-600 hover:bg-white hover:text-blue-500 text-center rounded-md hover:-translate-y-1.5 hover:shadow-lg text-white transition active:translate-y-0.5 active:shadow-md cursor-pointer"
                        >Sign Up
                    </button>
                </form>
                <div class="text-center mt-8 relative z-50">
                    <p class="text-white">Doesn't have an account?</p>
                    <p><a @click.prevent="changePage('/login')" class="text-blue-500 cursor-pointer">Sign In</a></p>
                </div>
            </div>
        </div>
    </div>
</template>