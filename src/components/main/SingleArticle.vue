<template>
    <div class="card d-flex flex-column align-items-center text-center gap-2 pb-3 ">
        <figure>
            <img :src="`./src/assets/img/${propsImg}`" alt="">
        </figure>
        <span>{{ propsDate }}</span>
        <h3>{{ propsTitle }}</h3>
    </div>
</template>

<script>
export default {
    name: 'SingleArticle',
    props: {
        propsImg: String,
        propsTitle: String,
        propsDate: String
    }
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables.scss' as *;

.card {

    flex-basis: calc(100% / 3 - 40px + (40px / 3));
    border: 0;

    h3 {

        font-size: 1.3rem;
    }

    span {

        font-size: .8rem;
        color: $secondary-color;
    }

    &:hover {
        box-shadow: 0 0 20px #09c1dd54;
        cursor: pointer;
    }

}
</style>