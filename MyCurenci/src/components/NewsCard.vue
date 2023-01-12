<script>
export default {
    props: {
        cardValue: Object
    },
}
</script>

<template>
    <div class="col">
        <!-- <div class="card h-100">
            <img :src="cardValue.imgUrl" class="card-img-top" alt="thisImage" style=" width: 15em; aspect-ratio: 16/9; object-fit: cover; object-position: center;">
            <div class="card-body">
                <h5 class="card-title">{{ cardValue.title }}</h5>
                <p class="card-text"><small class="text-muted">{{ cardValue.createdAt }}</small></p>
                <p class="card-text">{{ cardValue.desc }}</p>
                <a :href="cardValue.url"
                    class="card-link"><i class="material-icons" style="font-size:36px">description</i></a>
            </div>
            <div class="card-footer">
                Source : {{ cardValue.source }}
            </div>
        </div> -->
        <!-- <div class="card mb-3 h-100" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="cardValue.imgUrl" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ cardValue.title }}</h5>
                        <p class="card-text">{{ cardValue.desc }}</p>
                        <p class="card-text"><small class="text-muted">{{ cardValue.createdAt }}</small></p>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="card text-bg-dark h-100">
            <img id="imgHead" :src="cardValue.imgUrl" class="card-img" alt="..." style="opacity: 10%; aspect-ratio: 16/9; object-fit: cover; object-position: center;">
            <div class="card-img-overlay">
                <h5 class="card-title">{{ cardValue.title }}</h5>
                <p class="card-text">{{ cardValue.desc }}</p>
                <p class="card-text"><small>{{ cardValue.createdAt }}</small></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#card:hover {
    transform: scale(1.20);
}
</style>