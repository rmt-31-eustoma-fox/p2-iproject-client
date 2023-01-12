<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    methods: {
        ...mapActions(useCounterStore, ['midtransPayment']),
        payment(){
            const user = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                phone: this.phone
            }
            this.midtransPayment(user)
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="heading">
        <h2>Billing Details</h2>
        <h5 style="color: red;">*You will receive invoice and payment from your email, make sure your email is active*</h5>

            <form @submit.prevent="payment">
                <div>
                    <label for="first_name">First Name: </label>
                    <input type="text" class="form-control" id="first_name" placeholder="input first name" v-model="first_name">
                </div>

                <div>
                    <label for="last_name">Last Name: </label>
                    <input type="last_name" class="form-control" id="last_name" placeholder="input last name" v-model="last_name">
                </div>

                <div>
                    <label for="email">Email: </label>
                    <input type="email" class="form-control" id="email" placeholder="input email" v-model="email">
                </div>

                <div>
                    <label for="phone">Phone Number: </label>
                    <input type="number" class="form-control" id="phone" placeholder="input phone number" v-model="phones">
                </div>

                <div class="text-center flex justify-center">
                    <button type="submit" class="btn btn-info">Continue to payment</button>
                </div>
            </form>
        </div>
    </div>
</template>