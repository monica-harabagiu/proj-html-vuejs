<template>
    <main>
        <MainHero/>
    </main>
</template>

<script>
import { store } from '../../store.js'
import MainHero from './MainHero.vue'

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    components: {
        MainHero
    }
}
</script>

<style lang="scss" scoped>


</style>