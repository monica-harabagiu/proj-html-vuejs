<template>
    <div class="card">
        <figure class="m-0">
            <img :src="`./src/assets/img/${propsImg}.jpg`" alt="">
        </figure>

        <div class="yacht-info text-center">
            <i class="fa-solid fa-anchor"></i>
            <h3>{{ propsName }}</h3>
        </div>

    </div>
</template>

<script>
export default {
    name: 'SingleYacht',
    props: {
        propsImg: String,
        propsName: String,
    }
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables.scss' as *;

.card {

    background-color: black;
    flex-basis: calc(100% / 4 - 40px + (40px / 4));
    border: 0;
    border-radius: 5px;
    position: relative;

    figure {

        width: 100%;
        border-radius: 5px;
        overflow: hidden;
    }

    &:hover img {

        opacity: .6;
    }

    &:hover .yacht-info {

        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &:hover {
        border-radius: 5px;
    }

    .yacht-info {

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;

        i {

            font-size: 4rem;
            color: $accent-color;
        }

        h3 {

            color: $main-light-color;
            font-size: 2rem;
            font-weight: 600;
        }
    }
}
</style>