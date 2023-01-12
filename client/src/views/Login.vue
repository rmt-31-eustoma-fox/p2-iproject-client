<script>
import { mapActions } from 'pinia';
import RegLogButton from '../components/RegLogButton.vue'
import { mainFunction } from '../stores/main';
export default {
    components: {
        RegLogButton
    },
    data() {
        return {
            data: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(mainFunction, ['login', 'callback']),
        logIn() {
            this.login(this.data)
        },
        callbackGoogle(response){
            this.callback(response)
        }
    }
}
</script>
<template>

    <div class="container text-center thebg thePad">

        <RegLogButton />

        <h2>Login</h2>
        <br>
        <!-- Pills content -->
        <form @submit.prevent="logIn">
            <!-- Email input -->
            <label class="form-label" for="loginName">Username</label>
            <div class="form-outline mb-4  d-flex justify-content-center">
                <div class="col-sm-5">
                    <input type="text" id="loginName" class="form-control" style="background: rgba(255, 255, 255, 0.3)"
                        placeholder="Username" v-model="data.username" />
                </div>
            </div>

            <!-- Password input -->
            <label class="form-label" for="loginPassword">Password</label>
            <div class="form-outline mb-4  d-flex justify-content-center">
                <div class="col-sm-5">
                    <input type="password" id="loginPassword" class="form-control"
                        style="background: rgba(255, 255, 255, 0.3)" placeholder="Password" v-model="data.password" />
                </div>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

        </form>
        <!-- Pills content -->
        <h3>Or Sign In With Google Account</h3>
        <GoogleLogin :callback="callbackGoogle" />
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