<template>
    <main>
        <MainHero/>
        <MainHistory/>
        <MainBetter/>
        <MainServices/>
        <MainYachts/>
    </main>
</template>

<script>
import { store } from '../../store.js'
import MainHero from './MainHero.vue'
import MainHistory from './MainHistory.vue'
import MainBetter from './MainBetter.vue'
import MainServices from './MainServices.vue'
import MainYachts from './MainYachts.vue'

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
        MainBetter,
        MainServices,
        MainYachts
    }
}
</script>

<style lang="scss" scoped>


</style>