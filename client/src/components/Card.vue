<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
    data(){
        return {
            quantity: 0
        }
    },
    props: ['product'],
    methods: {
        ...mapActions(useCounterStore, ['addToCart', 'fetchCarts']),
        add(id){
            this.addToCart(id, this.quantity)
        },
        increment() {
            this.quantity++;
        },
        decrement() {
            this.quantity--;
        },
    },
    computed: {
        ...mapWritableState(useCounterStore, ['carts'])
    },
    created(){
        // this.fetchCarts()
        // console.log(this.carts);
    }
}
</script>

<template>
<div class="flex items-center justify-center justify-center w-full md:w-1/2 lg:my-4 lg:px-0 lg:w-1/5">
    <!-- my-0 px-0 flex items-center justify-center w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 -->

    <!-- Article -->
    <div class="wrapper bg-white w-64 antialiased text-gray-900">
        <div>

            <img :src="product.imgUrl" alt=" random imgee"
                class="w-full object-cover object-center rounded-lg shadow-md">

            <div class="relative px-4 -mt-16  ">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex items-baseline">
                        <span
                            class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                             Stock
                        </span>
                        <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                            {{ product.stock }}
                        </div>
                    </div>

                    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{{ product.name }}</h4>

                    <div class="mt-1"> Rp
                        {{ product.price }}
                        <span class="text-gray-600 text-sm"></span>
                    </div>
                    <div class="mt-4">
                        <td class="p-4 px-6 text-center whitespace-nowrap">
                            <div>
                                <button @click="decrement" >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-flex w-6 h-6 text-red-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                                {{ quantity }}
                                <!-- <input v-model="quantity" type="text" name="qty" value="1" class="w-12 text-center bg-gray-100 outline-none" /> -->
                                <button @click="increment">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-flex w-6 h-6 text-green-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                            </div>
                            
                        </td>
                            

                        <!-- <div class="inline-flex items-center mt-2">
                            <button
                                class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                                </svg>
                            </button>
                            <div
                                class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                                2
                            </div>
                            <button
                                class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div> -->
                        <button @click.stop="add(product.id)"
                            class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
                            Add to cart
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- END Article -->

</div>

</template>