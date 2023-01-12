<script>
import { useCounterStore } from '../stores/counter'
import { mapActions, mapWritableState } from 'pinia'

export default {
    methods: {
        ...mapActions(useCounterStore, ["fetchAccomodationDetail", "addTransaction"])
    },
    computed: {
        ...mapWritableState(useCounterStore, ["accomodation"])
    },
    created() {
        this.fetchAccomodationDetail(this.$route.params.id)
    }
}
</script>

<template>
    <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
       <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
         <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
           <img
             alt=""
             :src="accomodation.Images[0].imageUrl"
           />
           <img
             alt=""
             :src="accomodation.Images[1].imageUrl"
           />
           <img
             alt=""
             :src="accomodation.Images[2].imageUrl"
           />
         </div>

         <div class="sticky top-0">
           <strong
             class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
           >
             {{ accomodation.type }}
           </strong>
           <div class="flex justify-between mt-8">
            <div class="max-w-[35ch]">
                <h1 class="text-2xl font-bold">
                 {{ accomodation.name }}
                </h1>
            </div>

            <p v-if="accomodation.star == 5" class="mt-1.5 text-center font-bold text-gray-700">★★★★★</p>
            <p v-if="accomodation.star == 4" class="mt-1.5 text-center font-bold text-gray-700">★★★★☆</p>
            <p v-if="accomodation.star == 3" class="mt-1.5 text-center font-bold text-gray-700">★★★☆☆</p>
            <p v-if="accomodation.star == 2" class="mt-1.5 text-center font-bold text-gray-700">★★☆☆☆</p>
            <p v-if="accomodation.star == 1" class="mt-1.5 text-center font-bold text-gray-700">★☆☆☆☆</p>
           </div>
            <div>
                <div class="prose max-w-none group-open:hidden">
                <br>
                <h1 class="font-bold">Address</h1>
                <p class="text-justify">
                    {{ accomodation.address }}
                </p>
                <br>
                <h1 class="font-bold">Price</h1>
                <p>
                Rp{{ accomodation.price }}
                </p><br>
                </div>
            </div>
           <form class="mt-8">
             <div class="flex mt-8">
               <button
                 @click.prevent="addTransaction(this.$route.params.id)"
                 type="submit"
                 class="block px-5 py-3 ml-3 text-xs font-medium text-white bg-[#457b9d] rounded hover:bg-[#1d3557]"
               >
                 ORDER
               </button>
             </div>
           </form>
         </div>
       </div>
     </div>
</template>