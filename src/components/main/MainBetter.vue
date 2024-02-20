<template>
    <section>

        <div class="container">
            <div class="row">

                <div class="col text-center d-flex flex-column gap-4 ">
                    <h2>Yacht Charters, Repairs & Transportation, US-wide!</h2>
                    <div><button class="btn py-3 px-4">More Details</button></div>
                </div>

            </div>
        </div>

    </section>
</template>

<script>
export default {
    name: 'MainBetter'
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables.scss' as *;

section {

    background-image: url(../../assets/img/bg5.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-block: 300px;

    h2 {

        color: $main-light-color;
        font-size: 4rem;
        font-weight: 700;
    }

    button {

        background-color: $accent-color;
        color: $main-light-color;

        &:hover {

            background-color: $main-light-color;
            color: $main-dark-color;
        }
    }
}
</style>