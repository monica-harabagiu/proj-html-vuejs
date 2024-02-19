<template>
    <li class="nav-item">
        <a class="nav-link active text-uppercase" aria-current="page" :href="propsLink">{{ propsName }}</a>
    </li>
</template>

<script>
export default {
    name: 'MenuHeader',
    props: {
        propsLink: String,
        propsName: String
    }
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables.scss' as *;

li {

    a {

        font-size: .9rem;
        font-weight: 500;
    }

    .active {

        &:hover {
            color: $accent-color;
        }
    }
}
</style>