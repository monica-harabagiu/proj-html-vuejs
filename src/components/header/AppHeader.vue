<template>
  <header>

    <div>

      <div class="header-top">
        <div class="container">
          <div class="row py-2">

            <div class="contacts col-6 d-flex gap-5">

              <div class="d-flex gap-3 align-items-center">
                <i class="fa-solid fa-location-dot"></i>
                <span>7087 Richmond hwy, Alexandria, VA</span>
              </div>
              <div class="d-flex gap-3 align-items-center">
                <i class="fa-solid fa-phone"></i>
                <span>800-2345-6789</span>
              </div>

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

      <div class="header-bottom">
        <div class="container">
          <div class="row py-3">

            <nav class="navbar navbar-expand-lg navbar-dark">
              <div class="container-fluid d-flex justify-content-between gap-5 align-items-center ">

                <figure class="m-0">
                  <img src="../../assets/img/logo.png" alt="QuickWind Logo">
                </figure>

                <div class="collapse navbar-collapse d-flex justify-content-center " id="navbarNav">
                  <ul class="navbar-nav gap-4">

                    <MenuHeader v-for="(element, index) in store.menuHeader" :key="index" :propsLink="element.link"
                      :propsName="element.name" />

                  </ul>
                </div>

                <div>
                  <svg width="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                    y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;"
                    xml:space="preserve">
                    <path
                      d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667    S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732    c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667    c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z">
                    </path>
                  </svg>
                </div>

              </div>
            </nav>

          </div>
        </div>
      </div>

    </div>


  </header>
</template>

<script>
import { store } from '../../store.js'
import MenuHeader from './MenuHeader.vue'

export default {
  name: 'AppHeader',
  data() {
    return {
      store
    }
  },
  components: {
    MenuHeader
  }
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables.scss' as *;

header {

  .header-top {

    background-color: $secondary-light-color;

    .contacts {

      i {

        color: $accent-color;
        font-size: .8rem;
      }

      span {

        font-size: .8rem;
        color: $secondary-color;
      }
    }

    
  }

  .header-bottom {

    background-color: black;


    svg {

      fill: $accent-color;

      &:hover {

        fill: $main-light-color;
        cursor: pointer;
      }
    }

  }
}
</style>