<script>
import { mapActions, mapWritableState } from 'pinia';
import { globalStore } from '../stores/global';


export default {
    props: {
        mybook: Object,
        queue: Number
    },

    computed: {
        date(){
            return new Date(this.mybook.createdAt).toLocaleString('id-ID', {
                dateStyle: 'medium', 
                timeStyle: 'long', 
                hour12: false 
            })
        },
    },

    methods: {
        ...mapActions(globalStore, ['updateStatus']),

        clickStatus(){
            this.updateStatus(this.mybook.id)
        }
    }
}
</script>

<template>
    <tr>
        <td>{{ queue }}</td>
        <!-- <td>{{ mybook.imageUrl }}</td> -->
        <td>{{ mybook.title }}</td>
        <td>{{ mybook.authors }}</td>
        <td>{{ mybook.publisher }}</td>
        <td>{{ mybook.isbn }}</td>
        <td>{{ date }}</td>
        <td v-if="mybook.status == 'Want to read'">
            <button @click.prevent="clickStatus" class="btn btn-sm btn-outline-primary">{{ mybook.status }}</button>
        </td>
        <td v-if="mybook.status == 'Currently reading'">
            <button @click.prevent="clickStatus" class="btn btn-sm btn-outline-success">{{ mybook.status }}</button>
        </td>
        <td v-if="mybook.status == 'Has been read'">
            <span @click.prevent="clickStatus" class="fw-bold">{{ mybook.status }}</span>
        </td>
    </tr>
</template>