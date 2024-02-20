<template>
    <section>

        <div class="container">
            <div class="row text-center mb-5">
                <h3 class="fw-bold mb-5">Services</h3>
                <div class="main-divider">
                    <div class="accent-divider"></div>
                </div>
            </div>
            <div class="cards d-flex flex-wrap">
                <SingleService v-for="(element, index) in store.arrServices" :key="index" :propsIcon="element.icon"
                    :propsTitle="element.title" :propsText="element.text" />

            </div>

        </div>
    </section>
</template>

<script>
import { store } from '../../store.js'
import SingleService from './SingleService.vue'

export default {
    name: 'MainServices',
    data() {
        return {
            store
        }
    },
    components: {
        SingleService
    }
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables.scss' as *;

section {

    padding-block: 100px;
    background-image: url(../../assets/img/bg6.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .main-divider {

        position: relative;
        height: 1px;
        width: 100%;
        background-color: #8c8e9062;

        .accent-divider {

            position: absolute;
            height: 1px;
            width: 5%;
            background-color: $accent-color;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    .cards {

        gap: 30px;
    }
}
</style>