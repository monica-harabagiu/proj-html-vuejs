<template>
    <li>
        <a class="text-uppercase" aria-current="page" :href="propsLink">{{ propsName }}</a>
    </li>
</template>

<script>
export default {
    name: 'MenuFooter',
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

        text-decoration: none;
        font-weight: 500;

        &:hover {

            color: $accent-color;
        }
    }
}
</style>