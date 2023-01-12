<script>

export default {
    props: ['qrCode'],
    created(){
    }
}
</script>
<template>
    <div>
        <img :src=qrCode.qrcode alt="" style="width: 200px; margin: 20px;">
    </div>
</template>