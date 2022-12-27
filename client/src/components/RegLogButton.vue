<script>
export default {
    emits: ['pageChange'],
    props: ['page'],
    methods: {
        pageChange(page) {
            this.$emit('pageChange', page)
        }
    }
}
</script>
<template>
    <div v-if="page == 'login'">
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" role="tab" aria-controls="pills-login"
                    aria-selected="true">Login</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="tab-register" data-mdb-toggle="pill" role="tab" @click="pageChange('register')"
                    aria-controls="pills-register" aria-selected="false" style="cursor: pointer;">Register</a>
            </li>
        </ul>
    </div>
    <div v-else>
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="tab-login" data-mdb-toggle="pill" role="tab" @click="pageChange('login')"
                    aria-controls="pills-login" aria-selected="true" style="cursor: pointer;">Login</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="tab-register" data-mdb-toggle="pill" role="tab"
                    aria-controls="pills-register" aria-selected="false">Register</a>
            </li>
        </ul>
    </div>
</template>
<style scoped>
div {
    padding-bottom: 20px;
}
</style>