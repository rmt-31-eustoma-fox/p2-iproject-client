<script>
import { mapActions, mapWritableState, mapState } from "pinia";
import axios from "axios";
import { useCounterStore } from "../stores/counter";
import CartRow from "../components/CartRow.vue";

export default {
  components: {
    CartRow,
  },

  methods: {
    ...mapActions(useCounterStore, ["fetchCart", "addOrderHandler"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, [
      "carts",
      "totalPrice",
      "baseUrl",
      "isLoader",
    ]),
  },
  created() {
    this.totalPrice = 0;
    this.fetchCart();
  },
};
</script>
<template>
  <section>
    <div class="flex max-h-full w-full pt-6">
      <div class="flex-1 bg-hero bg-cover bg-center bg-no-repeat">
        <div
          class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 bg-white bg-opacity-90"
        >
          <div class="max-w-3xl mx-auto">
            <header class="text-center">
              <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
            </header>

            <div class="mt-8">
              <CartRow v-for="cart in carts" :key="cart.id" :cart="cart" />
              <div class="flex justify-end pt-8 mt-8 border-t border-gray-100">
                <div class="w-screen max-w-lg space-y-4">
                  <dl class="space-y-0.5 text-sm text-gray-700">
                    <div class="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>Rp.{{ Number(totalPrice).toLocaleString() }},-</dd>
                    </div>
                  </dl>

                  <div class="flex justify-end">
                    <a
                      href="#"
                      class="block px-5 py-3 text-sm text-gray-100 font-medium transition bg-[#dda15e] rounded hover:bg-[#b08968]"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
