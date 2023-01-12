<script>
export default {
    props: ['monsterType', 'monsterRace', 'monsterAttribute', 'spellType', 'trapType', 'banlist','sort'],
    data(){
        return {
            value: this.monsterType || this.monsterRace || this.monsterAttribute || this.spellType || this.trapType || this.banlist || this.sort
        }
    },
}
</script>

<template>
    <option :value=value>{{ value }}</option>
</template>

<style scoped>
option {
    color: white;
    background-color: black;
}
</style>