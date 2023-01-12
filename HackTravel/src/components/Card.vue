<script>
import { useCounterStore } from '../stores/counter'
import { mapActions, mapWritableState } from 'pinia'

export default {
    props: ["city", "accomodation", "transaction"],
    methods: {
      ...mapActions(useCounterStore, ["deleteTransaction", "makePayment"])
    }
}
</script>

<template>
    <div v-if="city" class="relative block overflow-hidden group">
     <RouterLink :to="`/accomodations/${city.id}`">
       <img
         :src="city.imageUrl"
         alt="image"
         class="object-contain w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
       />
     </RouterLink>

     <div class="relative p-6 bg-white border border-gray-100">
       <RouterLink :to="`/accomodations/${city.id}`">
         <h3
           class="mt-4 text-center font-bold text-gray-900 truncate hover:whitespace-normal"
         >
           {{ city.name }}
         </h3>

         <p class="mt-1.5 text-center font-bold text-gray-700">{{ city.province }}</p>
         <p class="mt-1.5 text-center font-bold text-gray-700">{{ city.country }}</p>
       </RouterLink>
     </div>
   </div>

   <div v-if="accomodation" class="relative block overflow-hidden group">
     <RouterLink :to="`/accomodation-detail/${accomodation.id}`">
       <img
         :src="accomodation.Images[0].imageUrl"
         alt="image"
         class="object-contain w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
       />
     </RouterLink>

     <div class="relative p-6 bg-white border border-gray-100">
       <RouterLink :to="`/accomodation-detail/${accomodation.id}`">
         <h3
           class="mt-4 text-center font-bold text-gray-900 truncate hover:whitespace-normal"
         >
           {{ accomodation.name }}
         </h3>

         <p class="mt-1.5 text-center font-bold text-gray-700">{{ accomodation.type }}</p>
         <p v-if="accomodation.star == 5" class="mt-1.5 text-center font-bold text-gray-700">★★★★★</p>
         <p v-if="accomodation.star == 4" class="mt-1.5 text-center font-bold text-gray-700">★★★★☆</p>
         <p v-if="accomodation.star == 3" class="mt-1.5 text-center font-bold text-gray-700">★★★☆☆</p>
         <p v-if="accomodation.star == 2" class="mt-1.5 text-center font-bold text-gray-700">★★☆☆☆</p>
         <p v-if="accomodation.star == 1" class="mt-1.5 text-center font-bold text-gray-700">★☆☆☆☆</p>
       </RouterLink>
     </div>
   </div>

   <div v-if="transaction" class="relative block overflow-hidden group">
     <div class="relative p-6 bg-white border border-gray-100">
         <h3 class="mt-4 text-center font-bold text-gray-900 truncate hover:whitespace-normal">
           {{ transaction.Accomodation.name }}
         </h3>
         <p v-if="transaction.Accomodation.star == 5" class="mt-1.5 text-center font-bold text-gray-700">★★★★★</p>
         <p v-if="transaction.Accomodation.star == 4" class="mt-1.5 text-center font-bold text-gray-700">★★★★☆</p>
         <p v-if="transaction.Accomodation.star == 3" class="mt-1.5 text-center font-bold text-gray-700">★★★☆☆</p>
         <p v-if="transaction.Accomodation.star == 2" class="mt-1.5 text-center font-bold text-gray-700">★★☆☆☆</p>
         <p v-if="transaction.Accomodation.star == 1" class="mt-1.5 text-center font-bold text-gray-700">★☆☆☆☆</p>
         <p class="mt-1.5 text-center font-bold text-gray-700">Price: Rp.{{ transaction.price }}</p>
         <p class="mt-1.5 text-center font-bold text-gray-700">Address: {{ transaction.Accomodation.address }}</p>
         <p v-if="transaction.isPaid == true" class="mt-1.5 text-center font-bold text-gray-700">Paid: ✅</p>
         <p v-if="transaction.isPaid == false" class="mt-1.5 text-center font-bold text-gray-700">Paid: ❌</p>
         <form class="mt-4">
         <button
           @click.prevent="deleteTransaction(transaction.Accomodation.id)"
           v-if="transaction.isPaid == false"
           class="block w-full p-4 text-white font-medium transition bg-gray-50 dark:bg-gray-800 rounded hover:scale-105"
         >
           Delete Transaction
         </button><br>
         <button
           @click.prevent="makePayment(transaction.Accomodation.id)"
           v-if="transaction.isPaid == false"
           class="block w-full p-4 text-white font-medium transition bg-gray-50 dark:bg-gray-800 rounded hover:scale-105"
         >
           Pay
         </button>
       </form>
     </div>
   </div>
</template>