<script>
import { mapActions, mapWritableState } from 'pinia';
import { globalStore } from '../stores/global';


export default {
    props: {
        order: Object,
        mybook: Object,
        queue: Number
    },

    computed: {
        ...mapWritableState(globalStore, ['dataBook']),

        dateAddMyBook(){
            return new Date(this.mybook.createdAt).toLocaleString('id-ID', {
                dateStyle: 'medium'
            })
        },

        dateAddOrder(){
            return new Date(this.order.createdAt).toLocaleString('id-ID', {
                dateStyle: 'medium'
            })
        },

        formatPrice(){
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR'}).format(Math.ceil(this.order.price * 15348))
        }
    },

    methods: {
        ...mapActions(globalStore, ['updateStatus', 'delOrder', 'paymentByOrder']),

        clickStatus(){
            this.updateStatus(this.mybook.id)
        },

        clickCheckout(){
            this.dataBook.title = this.order.title
            this.dataBook.code = this.order.code
            this.dataBook.authors = this.order.authors
            this.dataBook.imageUrl = this.order.imageUrl
            this.dataBook.publisher = this.order.publisher
            this.dataBook.publishedDate = this.order.publishedDate
            this.dataBook.pageCount = this.order.pageCount
            this.dataBook.isbn = this.order.isbn
            this.dataBook.price = this.order.price
            this.dataBook.description = this.order.description
            // console.log(this.dataBook, '<<<< cek');
            this.paymentByOrder(this.order.id)
        },

        clickRemove(){
            // console.log(this.order.id, '<<< test del');
            this.delOrder(this.order.id)
        }
    }
}
</script>

<template>
    <tr>
        <td>{{ queue }}</td>
        <!-- <td>{{ mybook.imageUrl }}</td> -->
        <td v-if="$route.fullPath == '/mybook'">{{ mybook.title }}</td>
        <td v-if="$route.fullPath == '/mybook'">{{ mybook.authors }}</td>
        <td v-if="$route.fullPath == '/mybook'">{{ mybook.publisher }}</td>
        <td v-if="$route.fullPath == '/mybook'">{{ mybook.isbn }}</td>
        <td v-if="$route.fullPath == '/mybook'">{{ dateAddMyBook }}</td>
        <td v-if="$route.fullPath == '/mybook'">
            <button v-if="mybook.status == 'Want to read'" @click.prevent="clickStatus" class="btn btn-sm btn-outline-primary">
                {{ mybook.status }}
            </button>
            <button v-if="mybook.status == 'Currently reading'" @click.prevent="clickStatus" class="btn btn-sm btn-outline-success">
                {{ mybook.status }}
            </button>
            <span v-if="mybook.status == 'Has been read'" @click.prevent="clickStatus" class="fw-bold">
                {{ mybook.status }}
            </span>
        </td>

        <td v-if="$route.fullPath == '/order'">{{ order.title }}</td>
        <td v-if="$route.fullPath == '/order'">{{ formatPrice }}</td>
        <td v-if="$route.fullPath == '/order'">{{ dateAddOrder }}</td>
        <td v-if="$route.fullPath == '/order'"><span>{{ order.status }}</span></td>
        <td v-if="$route.fullPath == '/order'">
            <button @click.prevent="clickCheckout" class="btn btn-sm btn-dark">Checkout</button>
        </td>
        <td v-if="$route.fullPath == '/order'">
            <button @click.prevent="clickRemove" class="btn btn-sm btn-danger">Remove</button>
        </td>
    </tr>
</template>