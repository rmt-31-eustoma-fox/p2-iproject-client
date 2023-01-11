<script>
</script>

<template>
    <div class="container" id="login-gate-section">
        <div class="col">
          <div class="d-flex flex-row justify-content-evenly my-5">
            <div class="col-lg-5 col-md-8 col-sm-12 border rounded py-3 shadow bg-dark">
                <div class="text-center text-light mb-3">
                    <h2>Sign Up</h2>
                </div>
                <div class="px-5">
                    <form id="register-form">
                        <div class="form-floating">
                            <input v-model="username" type="text" class="form-control" id="floatingName" placeholder="Name" required>
                            <label for="floatingName">Username</label>
                        </div>
                        <div class="form-floating mt-4">
                            <input v-model="email" type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required>
                            <label for="floatingEmail">Email address</label>
                        </div>
                        <div class="form-floating mt-4">
                            <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button class="btn w-100 btn-lg btn-outline-light mt-4">Sign up</button>
            
                    </form>
                    <div class="text-center my-3">
                        <label class="text-light">Or sign up using:</label>
                    </div>
                    <div class="d-flex justify-content-center">
                        <GoogleLogin :callback="shortCutGoogle"/>
                    </div>
    
                    <div class="d-flex justify-content-center my-3">
                        <label class="text-light me-2">Already have account?</label>
                        <router-link to="/login" style="text-decoration: none;" href=""> Login </router-link>
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