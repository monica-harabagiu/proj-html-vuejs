<template>
    <section id="yachts">
        <div class="container">
            <div class="row text-center mb-5">
                <h3 class="fw-bold mb-5">Our Yachts</h3>
                <div class="accent-divider mx-auto mb-5"></div>
            </div>

            <div class="cards d-flex flex-wrap">
                <SingleYacht v-for="(element, index) in store.arrYachts" :key="index" :propsImg="element.img"
                    :propsName="element.name" />
            </div>
            <div class="mt-5 d-flex justify-content-center ">
                <button type="button" class="btn btn-outline-light py-3 px-4">View All</button>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../../store.js'
import SingleYacht from './SingleYacht.vue'

export default {
    name: 'MainYachts',
    data() {
        return {
            store
        }
    },
    components: {
        SingleYacht
    }
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables.scss' as *;

section {

    background-color: $accent-color;
    padding-block: 100px;

    h3 {
        color: $main-light-color;
    }

    .accent-divider {

        height: 1px;
        width: 5%;
        background-color: $main-light-color;

    }

    .cards {

        gap: 40px;
    }

    button {

        font-weight: 500;
    }
}
</style>