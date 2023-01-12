<script>
export default {
    props: ['cons']
}
</script>

<template>
    <div class="card text-bg-dark mb-3" style="width: 18rem; margin-right: 5px;">
        <img :src="cons.logo" class="card-img-top" style="display: flex; -ms-flex-align: center; background-color: white; height: 150px;">
        <div class="card-body">
            <h5 class="card-title">{{ cons.name }}</h5>
            <p class="card-text">{{ cons.base }}</p>
            <a href="#" class="btn btn-danger" style="margin-right: 10px;" @click.prevent="productDetail(val.id)">Details</a>
        </div>
    </div>
</template>