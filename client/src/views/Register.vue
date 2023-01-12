<script>
import { mapActions } from 'pinia';
import RegLogButton from '../components/RegLogButton.vue'
import { mainFunction } from '../stores/main';
export default {
    components: {
        RegLogButton
    },
    data(){
        return {
            data: {
                email: '',
                username: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(mainFunction, ['register']),
        registration(){
            this.register(this.data)
        }
    }
}
</script>

<template>
    <div class="container text-center thebg thePad">

        <RegLogButton />

        <h2>Register</h2>
        <br>

        <form @submit.prevent="registration">
            <!-- Username input -->
            <label class="form-label" for="registerUsername">Username</label>
            <div class="form-outline mb-4  d-flex justify-content-center">
                <div class="col-sm-5">
                    <input type="text" id="registerUsername" class="form-control" style="background: rgba(255, 255, 255, 0.3)" placeholder="Username" v-model="data.username"/>
                </div>
            </div>

            <!-- Email input -->
            <label class="form-label" for="loginName">Email</label>
            <div class="form-outline mb-4  d-flex justify-content-center">
                <div class="col-sm-5">
                    <input type="email" id="loginName" class="form-control" style="background: rgba(255, 255, 255, 0.3)" placeholder="Email"  v-model="data.email"/>
                </div>
            </div>

            <!-- Password input -->
            <label class="form-label" for="registerPassword">Password</label>
            <div class="form-outline mb-4  d-flex justify-content-center">
                <div class="col-sm-5">
                    <input type="password" id="registerPassword" class="form-control" style="background: rgba(255, 255, 255, 0.3)" placeholder="Password"  v-model="data.password"/>
                </div>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>

        </form>
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