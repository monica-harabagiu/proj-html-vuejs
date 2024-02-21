<template>
    <footer>
        <div>

            <div class="footer-top py-5">
                <div class="container">
                    <div class="row py-2">

                        <div class="col-3">
                            <figure>
                                <img src="../../assets/img/logo-dark.png" alt="">
                            </figure>
                            <p>Yacht rentals for people who love sailing across the seas…</p>
                        </div>

                        <div class="col-5 d-flex gap-5 justify-content-center ">
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <MenuFooter class="footer-top-menu" v-for="(element, index) in store.menuFooter.slice(0, 3)"
                                    :key="index" :propsLink="element.link" :propsName="element.name" />
                            </ul>
                            <ul class="list-unstyled d-flex flex-column gap-2">
                                <MenuFooter class="footer-top-menu" v-for="(element, index) in store.menuFooter.slice(3)"
                                    :key="index" :propsLink="element.link" :propsName="element.name" />
                            </ul>
                        </div>

                        <div class="col-4">
                            <h5 class="m-0">Newsletter</h5>
                            <form class="d-flex mt-4" role="search">
                                <input class="form-control py-3" type="text" placeholder="Enter your e-mail">
                                <button class="btn btn-outline-success px-3" type="submit">Subscribe</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="container">
                    <div class="row py-3">

                        <div class="col-6 d-flex align-items-center ">
                            <span class="me-2 text-uppercase">Zemez <span class="rights">©. all rights reserved</span>
                            </span>
                            <ul class="list-unstyled d-flex gap-2 m-0">
                                <MenuFooter class="footer-bottom-menu" v-for="(element, index) in store.menuFooter.slice(4)"
                                    :key="index" :propsLink="element.link" :propsName="element.name" />
                            </ul>
                        </div>

                        <div class="socials col-6 d-flex justify-content-end">
                            <ul class="d-flex gap-3 m-0">
                                <li class="list-unstyled d-flex justify-content-center align-items-center"
                                    v-for="(element, index) in store.socialMenuIcons" :key="index">
                                    <a href="#"><i :class="`fa-brands ${element.icon}`"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </footer>
</template>

<script>
import { store } from '../../store.js'
import MenuFooter from './MenuFooter.vue'

export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    },
    components: {
        MenuFooter
    }
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables.scss' as *;

.footer-top {

    background-color: $secondary-light-color;

    input {

        border-radius: 0;
        border: 0;
        font-size: .8rem;
    }

    ::placeholder {

        color: $secondary-color;
    }

    button {

        border-radius: 2px;
        background-color: $accent-color;
        border: 0;
        color: $main-light-color;
        font-size: .9rem;

        &:hover {

            background-color: $main-dark-color;
        }
    }

}

.footer-bottom {

    background-color: $main-dark-color;
    color: $secondary-light-color;

    span {

        font-size: .8rem;
    }

    .rights {

        color: $secondary-color;
    }

    .footer-bottom-menu {

        padding-left: 10px;
        border-left: 1px solid white;
        color: white;
    }
}
</style>