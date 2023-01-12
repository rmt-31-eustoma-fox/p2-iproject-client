<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
    data() {
        return {
            login: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions(useCounterStore, ["loginHandler", "googleLoginHandler"]),
        
        submitForm() {
            this.loginHandler({
                email: this.login.email,
                password: this.login.password
            })
        }
    }
}
</script>

<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <form @submit.prevent="submitForm" class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">LOGIN</h1>

                <input 
                    v-model="login.email"
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" />

                <input 
                    v-model="login.password"
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" />

                <button
                    type="submit"
                    class="w-full text-center py-3 rounded bg-gray-50 dark:bg-gray-800 text-white focus:outline-none my-1"
                >Login</button>

                <div class="text-grey-dark text-center mt-6">
                Did'nt have an account? 
                    <RouterLink to="/register" @click.prevent="this.$router.push('/register')" class="no-underline border-b border-blue text-blue">
                        Register
                    </RouterLink>
                </div>

                <br>
                <p class="text-center"> Or </p>
                <div class="flex justify-center pb-8 my-4">
                    <GoogleLogin :callback="googleLoginHandler" />
                </div>
            </form>
        </div>
    </div>
</template>
