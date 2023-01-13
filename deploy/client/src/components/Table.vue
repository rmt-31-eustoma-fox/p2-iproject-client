<script>
import Row from "@/components/Row.vue"
import { mapWritableState } from "pinia";
import { globalStore } from "../stores/global";

export default {
  components: {
    Row
  },

  computed: {
    ...mapWritableState(globalStore, ['mybooks','orders', 'isLoading'])
  }
}
</script>

<template>
    <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
                <tr>
                <th scope="col">#</th>
                <!-- <th scope="col">Cover</th> -->
                <th scope="col">Title</th>
                <th v-if="$route.fullPath == '/mybook'" scope="col">Author</th>
                <th v-if="$route.fullPath == '/mybook'" scope="col">Publisher</th>
                <th v-if="$route.fullPath == '/mybook'" scope="col">ISBN</th>
                <th v-if="$route.fullPath == '/mybook'" scope="col">Date Added</th>
                <th v-if="$route.fullPath == '/order'" scope="col">Price</th>
                <th v-if="$route.fullPath == '/order'" scope="col">Date Ordered</th>
                <th scope="col">Status</th>
                <th v-if="$route.fullPath == '/order'" scope="col" width="50px"></th>
                <th v-if="$route.fullPath == '/order'" scope="col" width="50px"></th>
                </tr>
            </thead>
            <tbody>
                <Row 
                    v-if="$route.fullPath == '/order'"
                    v-for="(order, idx) in orders" 
                    :key="idx" 
                    :queue="idx+1" 
                    :order="order"
                />

                <Row 
                    v-if="$route.fullPath == '/mybook'"
                    v-for="(mybook, idx) in mybooks" 
                    :key="idx" 
                    :queue="idx+1" 
                    :mybook="mybook"
                />
            </tbody>
        </table>
    </div>
</template>