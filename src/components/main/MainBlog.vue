<template>
    <section>
        <div class="container">
            <div class="row text-center mb-5">
                <h3 class="fw-bold mb-5">Yachtsmen`s Blog</h3>
                <div class="main-divider">
                    <div class="accent-divider"></div>
                </div>
            </div>
            <div class="cards d-flex flex-wrap">
                <SingleArticle
                v-for="(element, index) in store.blogArticles"
                :key="index"
                :propsImg="element.image"
                :propsDate="element.date"
                :propsTitle="element.title"
                 />
            </div>
            <div class="d-flex justify-content-center mt-5">
                <button class="btn py-3 px-4">More Details</button>
            </div>

        </div>
    </section>
</template>

<script>
import { store } from '../../store.js'
import SingleArticle from './SingleArticle.vue';

export default {
    name: 'MainBlog',
    data() {
        return {
            store
        }
    },
    components: {
        SingleArticle
    }
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables.scss' as *;

section {

    padding-block: 100px;

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

        gap: 40px;
    }

    button {

        background-color: $accent-color;
        color: $main-light-color;

        &:hover {

            background-color: $main-dark-color;
            color: $main-light-color;
        }
    }
}
</style>