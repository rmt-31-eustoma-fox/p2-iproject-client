<script>

export default {
    props: {
        portal: Object
    }
}
</script>

<template>
    <div class="col-lg-6">
        <img class="rounded" :src="portal.urlToImage" style="height: 250px; width: 300;"/>
        <div class="d-flex align-items-center">
            <div class="w-100 d-flex flex-column text-start ps-4">
                <h5 class="d-flex justify-content-between border-bottom pb-2">
                    <span>{{ portal.title }}</span>
                </h5>
                <small class="fst-italic">{{ portal.description }}</small>
                <a :href="portal.url">Read More</a>
            </div>
        </div>
    </div> 
</template>