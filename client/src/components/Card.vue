<script>
import { mapActions, mapWritableState } from 'pinia';
import { globalStore } from '../stores/global';
import Swal from 'sweetalert2';


export default {
    props: {
        book: Object
    },

    computed: {
        ...mapWritableState(globalStore, ['dataBook']),

        formatPrice(){
            if(this.book.saleInfo.retailPrice){
                return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR'}).format(this.book.saleInfo.retailPrice.amount)
            } else {
                return "Rp 0,00"
            }
        },

        formatAuthor(){
            if(this.book.volumeInfo.authors){
                if(this.book.volumeInfo.authors.length != 0){
                    return this.book.volumeInfo.authors.join(", ")
                } else {
                    return "-"
                }
            } else {
                return "-"
            }
        },

        formatIsbn(){
            if(this.book.volumeInfo.industryIdentifiers){
                return this.book.volumeInfo.industryIdentifiers[0].identifier
            } else {
                return "-"
            }
        }
    },

    methods: {
        ...mapActions(globalStore, ['addOrder']),

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
        },

        clickBuy(){
            this.dataBook.title = this.book.volumeInfo.title
            this.dataBook.code = this.book.id
            this.dataBook.authors = this.formatAuthor
            this.dataBook.imageUrl = this.book.volumeInfo.imageLinks.smallThumbnail
            this.dataBook.publisher = this.book.volumeInfo.publisher
            this.dataBook.publishedDate = this.book.volumeInfo.publishedDate
            this.dataBook.pageCount = this.book.volumeInfo.pageCount
            this.dataBook.isbn = this.formatIsbn
            if(this.book.saleInfo.retailPrice){
                this.dataBook.price = this.book.saleInfo.retailPrice.amount
            } else {
                this.dataBook.price = 0
            }
            this.dataBook.description = this.book.volumeInfo.description
            console.log(this.dataBook, '<<<<< cek bro');
            this.addOrder()
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
                        <button @click.prevent="clickBuy" class="btn btn-dark mt-2">Buy</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <span class="fw-bolder fs-6">{{ book.volumeInfo.title }}</span><br><br>
                <ul>
                    <li>Author: </li>
                    <span class="fw-bold">{{ formatAuthor }}</span>
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