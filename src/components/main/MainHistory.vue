<template>
    <section>

        <div class="container">
            <div class="row">

                <div class="col-6">

                </div>
                <div class="col-6 d-flex flex-column gap-4">
                    <h3 class="fw-bold">Our History</h3>
                    <div class="line d-flex">
                        <hr class="colored">
                        <hr>
                    </div>
                    <p class="d-flex flex-column gap-4">
                        <span class="fw-bold">Founded by a worldwide-famous yacht racer Alfred Tannenstrick, since its
                            inception back in
                            1977, this
                            company has been a welcoming harbor for all yachting and sailing enthusiasts, from all across
                            the
                            US!
                        </span>
                        <span>
                            We offer a real variety of professional services, from the simple yachts chartering and
                            corporate
                            events, all the way to yacht repairs, upgrades and modifications and maintenance checkups.
                        </span>
                        <span>
                            With decades of professional experience in renting, repairing and transporting just all kinds of
                            yachts and boats under our belt – we can assure you that we are your best choice!
                        </span>
                    </p>
                    <div>
                        <button class="btn py-3 px-4">Read More</button>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MainHistory'
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables.scss' as *;

section {

    background-image: url(../../assets/img/bg4.jpg);
    padding-block: 200px;

    .line {

        hr {

            border: 1px solid $secondary-color;
            width: 100%;
        }

        .colored {

            border: 1px solid $accent-color;
            opacity: 1;
            width: 10%;
        }

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