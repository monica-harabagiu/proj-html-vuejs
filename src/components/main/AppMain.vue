<template>
    <main>
        <MainHero/>
        <MainHistory/>
    </main>
</template>

<script>
import { store } from '../../store.js'
import MainHero from './MainHero.vue'
import MainHistory from './MainHistory.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    components: {
        MainHero,
        MainHistory
    }
}
</script>

<style lang="scss" scoped>


</style>