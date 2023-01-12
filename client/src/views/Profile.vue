<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import Sidebar from '../components/Sidebar.vue'
import { mainFunction } from '../stores/main';
export default {
    components: { Sidebar },
    computed: {
        ...mapState(mainFunction, ['user']),
        ...mapWritableState(mainFunction, ['image'])
    },
    methods: {
        ...mapActions(mainFunction, ['multer', 'getUsername',]),
        uploadFile(){
            this.image = this.$refs.file.files[0]
        }
    },
    created(){
        this.getUsername()
    },
    data(){
        return {
            images: `https://niix-brandedthings-production.up.railway.app/uploads/foto_profile_1.jpg`
        }
    }
}
</script>

<template>
    <div class="d-flex col">
        <Sidebar />
        <div class="flex flex-col justify-center items-center overflow-y-auto col-9">
            <div class="thebg thePad text-center">
                <h2>Profile</h2>
                <h4>Username : {{ user.username }}</h4>
                <h4>Email : {{ user.email }}</h4>
                <img :src=images style="margin: 20px auto;" alt="" srcset="">

                <form @submit.prevent="multer" enctype="multipart/form-data" >
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="inputGroupFile02" @change="uploadFile" ref="file">
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                    <div>
                        <input type="submit" class="btn btn-primary btn-block mb-4" value="Upload" />
                    </div>
                </form>
            </div>
        </div>
    </div>
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