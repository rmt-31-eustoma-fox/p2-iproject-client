<script>
import { mapActions } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import { mainFunction } from '../stores/main';
export default {
    props: ['index', 'myDeck'],
    methods: {
        ...mapActions(mainFunction, ['deleteDeck', 'theDeck']),
        deleteMyDeck(){
            this.deleteDeck(this.myDeck.id)
        },
        edit(){
            this.theDeck(this.myDeck.id)
        }
    }
}
</script>
<template>
    <tr>
        <td>{{ index+1 }}. </td>
        <td>{{ myDeck.name }}</td>
        <td><button type="button" class="btn btn-light" @click="edit">Edit</button><button @click="deleteMyDeck" type="button" class="btn btn-light">Delete</button></td>
    </tr>
</template>