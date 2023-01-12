<script>
import { useCounterStore } from '../stores/counter';
import { mapWritableState, mapActions } from 'pinia';
export default {
    computed : {
        ...mapWritableState(useCounterStore,['loginEmail','loginPassword'])
    },
    methods : {
        ...mapActions(useCounterStore,['loginHandler'])
    }
}
</script>


<template>
    <section class="vh-100" style="background-color: #508bfc;">
        <div class="container  h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong" style="border-radius: 1rem;">
                <div class="card-body p-5 text-center">
      
                  <h3 class="mb-5">Sign in</h3>
                  <form @submit.prevent="loginHandler" >
                    <div class="form-outline mb-4">
                      <input v-model="loginEmail"  type="email" id="typeEmailX-2" class="form-control form-control-lg" />
                      <label class="form-label" for="typeEmailX-2">Email</label>
                    </div>
        
                    <div class="form-outline mb-4">
                      <input v-model="loginPassword" type="password" id="typePasswordX-2" class="form-control form-control-lg" />
                      <label class="form-label" for="typePasswordX-2">Password</label>
                    </div>
        
                    <!-- Checkbox -->
                    <div class="form-check d-flex justify-content-start mb-4">
                      <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                      <label class="form-check-label" for="form1Example3"> Remember password </label>
                    </div>
  
        
                    <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                  </form>
              
                  <hr class="my-4">
                  <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? 
                    <router-link to="/register"  style="color: #393f81;">Register here</router-link></p>
      
                  <!-- <button class="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;"
                    type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button> -->
                    <!-- <GoogleLogin :callback="callback" prompt /> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>