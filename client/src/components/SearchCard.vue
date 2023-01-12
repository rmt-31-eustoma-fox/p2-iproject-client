<script>
export default {
    props: ['card', 'searchType'],
}
</script>
<template>
    <div class="col-6 border d-flex" style="padding: 0px; font-size: 10px; text-align: left;">
        <img :src=card.card_images[0].image_url style="width: 50px; " alt="">
        {{ card.name }} <br>
        {{ card?.frameType || ''}}    {{ card?.level || ''}} <br>
        {{ card?.atk || ''}}    {{ card?.def || ''}} 
    </div>
</template>