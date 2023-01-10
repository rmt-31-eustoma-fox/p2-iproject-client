<script>
import Sidebar from '../components/Sidebar.vue'
export default {
    components: { Sidebar }
}
</script>

<template>
    <div class="d-flex col">
        <Sidebar />
        <div class="flex flex-col justify-center items-center overflow-y-auto col-9">
            <div class="thebg thePad text-center">
                <h2>Profile</h2>
            </div>
        </div>
    </div>>
</template>

<style scoped>
.thebg {
    background: rgba(255, 255, 255, 0.3)
}

.thePad {
    padding: 30px;
    margin: 30px auto;
}
</style>