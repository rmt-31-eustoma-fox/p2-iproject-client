<script>
import { mapActions, mapWritableState } from 'pinia';
import { globalStore } from '../stores/global';


export default {
    computed: {
        ...mapWritableState(globalStore, ['email', 'password'])
    },

    methods: {
        ...mapActions(globalStore, ['login', 'googleSignIn']),

        clickLog(){
            this.login()
            this.email = ""
            this.password = ""
        },

        shortCutGoogle(response){
            this.googleSignIn(response)
        }
    }
}
</script>

<template>
    <div class="container" id="login-gate-section">
        <div class="col">
          <div class="d-flex flex-row justify-content-evenly my-5">
            <div class="col-lg-5 col-md-8 col-sm-12 border rounded py-3 shadow bg-dark">
                <div class="text-center text-light mb-3">
                    <h2>Sign In</h2>
                </div>
                <div class="px-5">
                    <form @submit.prevent="clickLog" id="login-form">
                        <div class="form-floating">
                            <input v-model="email" type="email" class="form-control" id="floatingEmailLog" placeholder="name@example.com" required>
                            <label for="floatingEmailLog">Email address</label>
                        </div>
                        <div class="form-floating mt-4">
                            <input v-model="password" type="password" class="form-control" id="floatingPasswordLog" placeholder="Password" required>
                            <label for="floatingPasswordLog">Password</label>
                        </div>
            
                        <button class="btn w-100 btn-lg btn-outline-light mt-4">Sign in</button>
            
                    </form>
                    <div class="text-center my-3">
                        <label class="text-light">Or sign in with:</label>
                    </div>
                    <div class="d-flex justify-content-center">
                        <GoogleLogin :callback="shortCutGoogle"/>
                    </div>
    
                    <div class="d-flex justify-content-center my-3">
                        <label class="text-light me-2">Don't have an account?</label>
                        <router-link to="/register" style="text-decoration: none;" href=""> Sign up </router-link>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<style scoped>
    .form-floating:focus-within {
        z-index: 2;
    }
</style>