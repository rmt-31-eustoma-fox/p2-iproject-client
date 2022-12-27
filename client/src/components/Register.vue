<script>
import RegLogButton from './RegLogButton.vue'
export default {
    emits: ['pageChange'],
    components: {
        RegLogButton
    },
    props: ['page'],
    methods: {
        pageChange(page) {
            this.$emit('pageChange', page)
        }
    }
}
</script>

<template>
    <div class="container text-center thebg thePad">

        <RegLogButton :page="page" @pageChange="pageChange" />

        <h2>Register</h2>
        <br>

        <form>
            <!-- Username input -->
            <label class="form-label" for="registerUsername">Username</label>
            <div class="form-outline mb-4  d-flex justify-content-center">
                <div class="col-sm-5">
                    <input type="text" id="registerUsername" class="form-control" style="background: rgba(255, 255, 255, 0.3)" placeholder="Username"/>
                </div>
            </div>

            <!-- Email input -->
            <label class="form-label" for="loginName">Email</label>
            <div class="form-outline mb-4  d-flex justify-content-center">
                <div class="col-sm-5">
                    <input type="email" id="loginName" class="form-control" style="background: rgba(255, 255, 255, 0.3)" placeholder="Email"/>
                </div>
            </div>

            <!-- Password input -->
            <label class="form-label" for="registerPassword">Password</label>
            <div class="form-outline mb-4  d-flex justify-content-center">
                <div class="col-sm-5">
                    <input type="password" id="registerPassword" class="form-control" style="background: rgba(255, 255, 255, 0.3)" placeholder="Password"/>
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