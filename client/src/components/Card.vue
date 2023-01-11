<script>
import { mapWritableState } from 'pinia';
import { globalStore } from '../stores/global';
import Swal from 'sweetalert2';


export default {
    props: {
        book: Object
    },

    computed: {
        formatPrice(){
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR'}).format(this.book.saleInfo.retailPrice? this.book.saleInfo.retailPrice.amount : "-")
        },

        // formatAuhtor(){
        //     return this.book.volumeInfo.authors.join(", ")
        // }
    },

    methods: {
        clickDesc(){
            Swal.fire({
                title: '<strong> Descripttion </strong>',
                icon: 'info',
                html:
                    `<p> ${ this.book.volumeInfo.description } </p>`,
                showCloseButton: true,
                // showCancelButton: true,
                focusConfirm: false,
            })
        }
    }
    
}
</script>

<template>
    <div class="col-md-6">
        <div class="card list-group-item-secondary">
            <div class="card-body">
                <div class="row g-3">
                    <div class="col-sm-4">
                        <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="" height="180">
                    </div>
                    <div class="col-sm-8">
                        <ul class="list-group">
                            <li class="list-group-item"><span class="fw-bold">{{ formatPrice }}</span></li>
                        </ul>
                        <button class="btn btn-dark mt-2">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <span class="fw-bolder fs-6">{{ book.volumeInfo.title }}</span><br><br>
                <ul>
                    <!-- <li>Author: </li> -->
                    <!-- <span class="fw-bold">{{ formatAuhtor }}</span> -->
                    <li>Publisher: <span class="fw-bold">{{ book.volumeInfo.publisher }}</span></li>
                    <li>Published Date: <span class="fw-bold">{{ book.volumeInfo.publishedDate? book.volumeInfo.publishedDate : "-" }}</span></li>
                    <li>Page Count: <span class="fw-bold">{{ book.volumeInfo.pageCount? book.volumeInfo.pageCount : "-" }}</span></li>
                    <li>ISBN: <span class="fw-bold">{{ book.volumeInfo.industryIdentifiers? book.volumeInfo.industryIdentifiers[0].identifier : "-" }}</span></li>
                </ul>
                <span class="fw-bolder">Description: </span>
                <div class="description">
                    <ul class="list-group">
                        <li class="list-group-item">{{ book.volumeInfo.description }}</li>
                    </ul>
                </div>
                <button @click.prevent="clickDesc" class="btn btn-secondary mt-1">Read more</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.description ul li {
    line-height: 20px;
    max-height: calc(20px * 3);
    overflow: hidden;
}
</style>