<template>
    <main>
        <MainHero/>
        <MainHistory/>
        <MainBetter/>
    </main>
</template>

<script>
import { store } from '../../store.js'
import MainHero from './MainHero.vue'
import MainHistory from './MainHistory.vue'
import MainBetter from './MainBetter.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    components: {
        MainHero,
        MainHistory,
        MainBetter
    }
}
</script>

<style lang="scss" scoped>


</style>