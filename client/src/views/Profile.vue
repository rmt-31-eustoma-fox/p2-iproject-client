<script>
import { mapActions } from 'pinia';
import Sidebar from '../components/Sidebar.vue'
import { mainFunction } from '../stores/main';
export default {
    components: { Sidebar },
    methods: {
        ...mapActions(mainFunction, ['multer'])
    }
}
</script>

<template>
    <div class="d-flex col">
        <Sidebar />
        <div class="flex flex-col justify-center items-center overflow-y-auto col-9">
            <div class="thebg thePad text-center">
                <h2>Profile</h2>
                <form @submit.prevent="multer" enctype="multipart/form-data">
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="inputGroupFile02">
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                    <div>
                        <input type="submit" class="btn btn-primary btn-block mb-4" value="Upload" />
                    </div>
                </form>
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