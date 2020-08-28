<template>

  <q-header
    class="bg-white text-dark size-header justify-center"
    elevated
  >
    <q-toolbar
      class="container q-pa-md"
    >

      <q-toolbar-title>
        <div class="row items-center">
          <img :src="require('src/assets/logo.png')">
        </div>
      </q-toolbar-title>

      <q-list class="mobile-hide">
        <div class="row">
          <links
            :key="index"
            v-bind="link"
            v-for="(link,index) in links"
          />
        </div>
      </q-list>

      <q-btn @click="drawer" class="mobile-only" dense flat icon="menu" round/>
    </q-toolbar>
  </q-header>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "CoreAppBar",
    computed: {
      ...mapGetters({
        links: 'GET_LINKS'
      })
    },
    methods: {
      ...mapActions({
        drawer: 'SET_DRAWER'
      }),
    },
    components: {
      Links: () => import('src/components/shared/Link')
    }
  }
</script>

<style scoped>

</style>
