<script>
export default {
    props: ['monsterType', 'monsterRace', 'monsterAttribute', 'spellType', 'trapType', 'banlist'],
    data(){
        return {
            value: this.monsterType || this.monsterRace || this.monsterAttribute || this.spellType || this.trapType || this.banlist
        }
    }
}
</script>

<template>
    <option :value=value>{{ value }}</option>
</template>