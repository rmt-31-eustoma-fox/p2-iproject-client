<script></script>

<template>
    <div class="col-md-6">
        <div class="card list-group-item-secondary">
            <div class="card-body">
                <div class="row g-3">
                    <div class="col-sm-4">
                        <img src="https://cdn.pixabay.com/photo/2017/10/31/09/55/dream-job-2904780__480.jpg" alt="" width="150">
                    </div>
                    <div class="col-sm-8">
                        <ul class="list-group">
                            <li class="list-group-item"><span class="fw-bold">Rp price</span></li>
                        </ul>
                        <button class="btn btn-warning mt-2">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <ul>
                    <li><span>title</span></li>
                    <li><span class="fw-bold">Author</span></li>
                    <li> <span class="fw-bold">publisher</span></li>
                    <li><span class="fw-bold"> date </span></li>
                    <li><span class="fw-bold"> page </span></li>
                    <li><span class="fw-bold">isbn</span></li>
                </ul>
                <p>description</p>
            </div>
        </div>
    </div>
    <!-- <div class="col-md-6">
        <div class="card list-group-item-success">
            <div class="card-body">
                <div class="row g-3">
                    <div class="col-sm-4">
                        <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="">
                    </div>
                    <div class="col-sm-8">
                        <ul class="list-group">
                            <li class="list-group-item"><span s>{{ book.volumeInfo.title }}</span></li>
                            <li class="list-group-item">Code: <span>{{ book.id }}</span></li>
                            <li class="list-group-item">Author: <span class="fw-bold">{{ book.volumeInfo.authors }}</span></li>
                            <li class="list-group-item">Publisher: <span class="fw-bold">{{ book.volumeInfo.publisher }}</span></li>
                            <li class="list-group-item">Published Date: <span class="fw-bold">{{ book.volumeInfo.publishedDate? book.volumeInfo.publishedDate : "-" }}</span></li>
                            <li class="list-group-item">Page Count: <span class="fw-bold">{{ book.volumeInfo.pageCount? book.volumeInfo.pageCount : "-" }}</span></li>
                            <li class="list-group-item">ISBN: <span class="fw-bold">{{ book.volumeInfo.industryIdentifiers }}</span></li>
                            <li class="list-group-item">Sample: <a :href="book.accessInfo.webReaderLink" class="fw-bold">Go</a></li>
                            <li class="list-group-item"><span class="fw-bold">Rp {{ book.saleInfo.retailPrice.amount }}</span></li>
                        </ul>
                        <button class="btn btn-warning mt-2">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <p>{{ book.volumeInfo.description }}</p>
            </div>
        </div>
    </div> -->
</template>