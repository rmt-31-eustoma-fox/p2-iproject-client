<script>
export default {
    props : ['cardValue']
}
</script>
<template>
    <div class="card mt-2">
        <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
        <div class="card-body">
            <h5 class="card-title">{{ cardValue.symbol }}</h5>
            <p class="card-text">{{ cardValue.name }}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</template>