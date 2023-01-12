<script>
export default {
    props: ['cardDeck'],
    methods: {

    }
}
</script>
<template>
    <img id="hop" :src=cardDeck.image_url_small style="width: 60px;" alt="" >
</template>

<style scoped>
#hop :hover {
    display: none;
}
</style>