<script>
export default {
    props : {
        cardValue : Object
    },
}
</script>

<template>
    <div class="col">
        <div class="card w-100 h-100">
            <img :src="cardValue.imgUrl" class="card-img-top" alt="thisImage" height="200vh" loading="lazy">
            <div class="card-body">
                <h5 class="card-title">{{ cardValue.title }}</h5>
                <p class="card-text"><small class="text-muted">{{ cardValue.createdAt }}</small></p>
                <p class="card-text">{{ cardValue.desc }}</p>
                <a :href="cardValue.url"
                    class="card-link"><i class="material-icons" style="font-size:36px">description</i></a>
                <!-- <a href="#" class="card-link">Another link</a> -->
            </div>
            <div class="card-footer">
                Source : {{ cardValue.source }}
            </div>
        </div>
    </div>
</template>