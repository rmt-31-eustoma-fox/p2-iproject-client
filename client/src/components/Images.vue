<script>
export default {
    props: ['cardDeck'],
    methods: {

    }
}
</script>
<template>
    <img :src=cardDeck.image_url_small style="width: 60px;" alt="" >
</template>