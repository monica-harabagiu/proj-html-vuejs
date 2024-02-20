<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-6 d-flex flex-column gap-2">
                    <h2 class="text-uppercase">Enjoy</h2>
                    <h4 class="text-uppercase">World Rally 2017-19</h4>
                    <p class="fw-bold">Explore some of the most beautiful regions of the world. Make your dreams come true
                        and join the
                        Yachtec World Rally 2017-19.</p>
                    <div>
                        <button class="btn py-3 px-4">More Details</button>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script>

export default {
    name: 'MainProposition'
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables.scss' as *;

section {

    background-image: url(../../assets/img/bg7.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-block: 200px;

    h2,
    h4,
    p,
    button {
        color: $main-light-color;
    }

    h2 {

        font-size: 6rem;
        font-weight: 700;
    }

    h4 {

        font-size: 3rem;
        font-weight: 300;
    }

    button {

        background-color: $accent-color;

        &:hover {

            background-color: $main-dark-color;
            color: $main-light-color;
        }
    }
}
</style>