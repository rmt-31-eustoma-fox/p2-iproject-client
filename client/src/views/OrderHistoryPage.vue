<script>
import { mapActions, mapWritableState, mapState } from "pinia";
import axios from "axios";
import { useCounterStore } from "../stores/counter";
import CartRow from "../components/CartRow.vue";
import HistoryRow from "../components/HistoryRow.vue";

export default {
  components: {
    CartRow,
    HistoryRow,
  },

  methods: {
    ...mapActions(useCounterStore, ["fetchOrderHistory"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["histories", "totalPrice"]),
  },
  created() {
    this.totalPrice = 0;
    this.fetchOrderHistory();
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
                Order History
              </h1>
            </header>

            <div class="mt-8">
              <HistoryRow
                v-for="history in histories"
                :key="history.id"
                :history="history"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
