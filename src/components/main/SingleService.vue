<template>

    <div class="card">

        <div class="d-flex gap-3 align-items-center mb-3">
            <div class="icon-circle d-flex justify-content-center align-items-center ">
                <i :class="propsIcon"></i>
            </div>
            <h5 class="m-0">{{ propsTitle }}</h5>
        </div>

        <p>{{ propsText }}</p>

    </div>

</template>

<script>
export default {
    name: 'SingleService',
    props: {
        propsIcon: String,
        propsTitle: String,
        propsText: String
    }
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables.scss' as *;

.card {

flex-basis: calc(100% / 3 - 30px + (30px / 3));
border: 0;
background: transparent;

.icon-circle {

    background-color: $accent-color;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    i {

        font-size: 1.8rem;
        color: $main-light-color;
    }

}

}
</style>