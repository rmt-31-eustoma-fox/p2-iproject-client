<script>
export default {
    props: ['card']
}
</script>
<template>
    <div class="col-6 border d-flex" style="padding: 0px; font-size: 12px; text-align: left;">
        <img :src=card.card_images[0].image_url style="width: 50px; " alt="">
        {{ card.name }}
    </div>
</template>