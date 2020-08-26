<template>

  <q-header
    class="bg-white text-dark size-header justify-center"
  >
    <q-toolbar
      class="container q-pa-md"
    >

      <q-toolbar-title>
        <div class="row items-center">
          <img :src="require('src/assets/logo.png')">
        </div>
      </q-toolbar-title>

      <div

        :key="link.title"
        v-bind="link"
        v-for="link in links"
      >
        <q-btn stretch size="15px" :label="link.title" :to="link.link" class="mobile-hide size-button" flat></q-btn>

      </div>
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
      //Links: ()=> import('src/components/shared/Link')
    }
  }
</script>

<style scoped>

</style>
