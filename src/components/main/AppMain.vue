<template>
    <main>
        <MainHero/>
        <MainHistory/>
        <MainBetter/>
        <MainServices/>
        <MainYachts/>
        <MainProposition/>
        <MainBlog/>
        <MainTestimonials/>
    </main>
</template>

<script>
import { store } from '../../store.js'
import MainHero from './MainHero.vue'
import MainHistory from './MainHistory.vue'
import MainBetter from './MainBetter.vue'
import MainServices from './MainServices.vue'
import MainYachts from './MainYachts.vue'
import MainProposition from './MainProposition.vue'
import MainBlog from './MainBlog.vue'
import MainTestimonials from './MainTestimonials.vue'

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
        MainYachts,
        MainProposition,
        MainBlog,
        MainTestimonials
    }
}
</script>

<style lang="scss" scoped>


</style>