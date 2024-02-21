<template>
    <section class="testimonial-bg">
        <div class="container">
            <div class="row text-center mb-5">
                <h3 class="fw-bold mb-5">Testimonials</h3>
                <div class="main-divider">
                    <div class="accent-divider"></div>
                </div>
            </div>


            <Carousel :autoplay="5000" :wrap-around="true">
                <Slide v-for="(element, index) in store.testimonials" :key="index">
                    <div class="d-flex justify-content-center ">
                        <div class="row testimonial px-4 py-5 align-items-center ">
                            <div class="col-3">
                                <figure class="m-0">
                                    <img :src="`./src/assets/img/${element.image}`" alt="">
                                </figure>
                            </div>
                            <div class="col-9">
                                <p class="mb-4 text-start">
                                    <i class="fa-solid fa-quote-right"></i>
                                    {{ element.quote }}
                                </p>
                                <h6 class="text-start">— {{ element.name }}</h6>
                            </div>
                        </div>
                    </div>

                </Slide>

                <template #addons>
                    <Pagination />
                </template>
            </Carousel>
        </div>
    </section>
</template>

<script>
import { store } from '../../store.js'
import 'vue3-carousel/dist/carousel.css'
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

export default defineComponent({
    name: 'MainTestimonials',
    data() {
        return {
            store
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination
    }

})
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables.scss' as *;

.testimonial-bg {

    background-image: url(../../assets/img/bg8.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: $main-light-color;
    padding-block: 100px;

    .main-divider {

        position: relative;
        height: 1px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.312);

        .accent-divider {

            position: absolute;
            height: 1px;
            width: 5%;
            background-color: $main-light-color;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    .testimonial {

        background-color: rgba(255, 255, 255, 0.3);
        width: 80%;

        figure {

            width: 200px;
            height: 200px;
            border-radius: 50%;
            overflow: hidden;
        }

        p {
            color: $main-light-color;
            font-weight: 400;
            line-height: 2rem;
            position: relative;

            i {
                position: absolute;
                font-size: 5rem;
                opacity: .3;
                top: -30px;
            }
        }


    }
}
</style>

<style lang="scss">
@use '../../style/partials/variables.scss' as *;

.testimonial-bg {

    .carousel__pagination {
        display: flex;
        justify-content: center;
        list-style: none;
        line-height: 0;
        margin: 30px 0 0;
        padding: 0;
        gap: 30px;
    }

    .carousel__pagination-button::after {
        display: block;
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: transparent;
        border: 2px solid $main-light-color;
    }

    .carousel__pagination-button--active::after {
        background-color: $main-light-color;
    }

    @media(hover: hover) {
        .carousel__pagination-button:hover::after {
            background-color: $main-light-color;
        }
    }
}
</style>