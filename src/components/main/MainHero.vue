<template>
    <Carousel :autoplay="5000" :wrap-around="true">

        <Slide v-for="(element, index) in store.heroCarousel" :key="index">
            <div class="hero-section" :style="{ backgroundImage: `url(${element.img})` }">
                <div class="container h-100">

                    <div class="row py-2 h-100">

                        <div :class="(index == 0) ? 'col-6 text-start' : 'col-12 text-center'"
                            class="hero-content d-flex flex-column justify-content-center">
                            <h1>{{ element.title }}</h1>
                            <h6>{{ element.description }}</h6>
                            <div class="mt-3">
                                <button type="button" class="btn btn-outline-light py-3 px-4">Learn More</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Slide>

        <template #addons>
            <Pagination />
        </template>
    </Carousel>
</template>

<script>
import { store } from '../../store.js'
import 'vue3-carousel/dist/carousel.css'
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

export default defineComponent({
    name: 'MainHero',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data() {
        return {
            store
        }
    }
})
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables.scss' as *;

.carousel {

    position: relative;
}

.carousel__slide {

    width: 100%;
}

.hero-section {

    // background-image: url(../../assets/img/bg1-1.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    color: $main-light-color;
    width: 100%;

    h1 {

        font-size: 7rem;
        font-weight: 700;
    }

    h6 {

        font-size: 1.3rem;
        font-weight: 400;
    }

    button {

        font-weight: 500;
    }
}

.carousel__item {

    height: 100vh;
}

.carousel__pagination {

    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
    gap: 30px;
}
</style>