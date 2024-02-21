<script>
import AppHeader from './components/header/AppHeader.vue'
import AppFooter from './components/footer/AppFooter.vue'
import AppMain from './components/main/AppMain.vue'
import AppSearch from './components/AppSearch.vue'
import { store } from './store'

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppSearch
  },
  data() {
    return {
      store
    }
  },
  methods: {

  }
}
</script>

<template>
  <AppSearch/>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
