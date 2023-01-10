<script>
import RegLogButton from '../components/RegLogButton.vue'
export default {
    components: {
        RegLogButton
    }
}
</script>
<template>

    <div class="container text-center thebg thePad">

        <RegLogButton/>

        <h2>Login</h2>
        <br>
        <!-- Pills content -->
        <form>
            <!-- Email input -->
            <label class="form-label" for="loginName">Email</label>
            <div class="form-outline mb-4  d-flex justify-content-center">
                <div class="col-sm-5">
                    <input type="email" id="loginName" class="form-control" style="background: rgba(255, 255, 255, 0.3)"
                        placeholder="Email" />
                </div>
            </div>

            <!-- Password input -->
            <label class="form-label" for="loginPassword">Password</label>
            <div class="form-outline mb-4  d-flex justify-content-center">
                <div class="col-sm-5">
                    <input type="password" id="loginPassword" class="form-control"
                        style="background: rgba(255, 255, 255, 0.3)" placeholder="Password" />
                </div>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

        </form>
        <!-- Pills content -->

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