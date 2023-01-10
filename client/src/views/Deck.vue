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
                <h2>Deck</h2>
                <form>
                    <!-- Email input -->
                    <label class="form-label" for="loginName">New Deck</label>
                    <div class="form-outline mb-4  d-flex justify-content-center">
                        <div class="col-sm-5" style="margin-right: 10px;">
                            <input type="email" id="loginName" class="form-control"
                                style="background: rgba(255, 255, 255, 0.3)" placeholder="New Deck Name" />
                        </div>
                        <button type="submit" class="btn btn-dark">Add</button>
                    </div>
                </form>
                <br><br>
                <h2>Your Deck</h2>
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
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