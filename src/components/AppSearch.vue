<template>
    <div class="search-popup" :class="(store.searchPopup) ? 'd-block' : 'd-none'">

        <div class="d-flex justify-content-center align-items-center h-100" data-bs-theme="dark">

            <i @click="store.searchPopup = false" class="fa-solid fa-xmark"></i>

            <input class="form-control me-2 w-50 " type="search" placeholder="Search..." aria-label="Search" />

        </div>



    </div>
</template>

<script>
import { store } from '../store.js'
export default {
    name: 'AppSearch',
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
.search-popup {
    background-color: rgba(0, 0, 0, 0.8);
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;

    input {

        background-color: transparent;
        border: 0;
        border-radius: 0;
        border-bottom: 1px solid white;
        padding-block: 20px;

        &::placeholder {

            color: white;
            font-size: 2rem;
        }
    }

    i {
        position: absolute;
        color: white;
        font-size: 3rem;
        top: 40px;
        right: 40px;
        cursor: pointer;
    }
}
</style>