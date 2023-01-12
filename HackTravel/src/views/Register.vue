<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
    data() {
        return {
            register: {
                name: "",
                email: "",
                password: "",
                dateOfBirth: "",
                phoneNumber: "",
                address: ""
            }
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["registerHandler"]),

        submitForm() {
            this.registerHandler({
                name: this.register.name,
                email: this.register.email,
                password: this.register.password,
                dateOfBirth: this.register.dateOfBirth,
                phoneNumber: this.register.phoneNumber,
                address: this.register.address
            })
        }
    }
}
</script>

<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <form @submit.prevent="submitForm" class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">REGISTER</h1>
                <input
                    v-model="register.name"
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="username"
                    placeholder="User Name"
                    required />

                <input 
                    v-model="register.email"
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email"
                    required />

                <input
                    v-model="register.password"
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" 
                    required/>

                <input
                    v-model="register.dateOfBirth"
                    type="date"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="date"
                    placeholder="date" 
                    required/>

                <input
                    v-model="register.phoneNumber"
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="phoneNumber"
                    placeholder="Phone Number" />

                <input
                    v-model="register.address"
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="address"
                    placeholder="Address" />

                <button
                    type="submit"
                    class="w-full text-center py-3 rounded bg-gray-50 dark:bg-gray-800 text-white focus:outline-none my-1"
                >Create Account</button>

                <div class="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the 
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="">
                        Terms of Service
                    </a> and 
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="">
                        Privacy Policy
                    </a>
                </div>
            </form>

            <div class="text-grey-dark mt-6">
                Already have an account? 
                <RouterLink to="/login" @click.prevent="this.$router.push('/login')" class="no-underline border-b border-blue text-blue">
                    Log in
                </RouterLink>
            </div>
        </div>
    </div>
</template>
