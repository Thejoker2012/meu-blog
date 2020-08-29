<template>

  <q-header
    class="bg-white text-dark bg-grey-1 size-header justify-center"
    elevated
  >
    <q-toolbar
      class="container q-pa-md"
    >

      <q-toolbar-title>
        <div class="row items-center">
          <q-img
            :ratio="1" :src="require('src/assets/logo.png')"
            alt="Imagem de três triângulos coloridos uma amarelo limão um verde mar e outro roxo"
            contain
            height="50px"
            width="50px"
          />
            <div class="q-ml-sm">
              <div class="text-weight-medium">StarTIS</div>
              <div class="text-caption" style="margin-top: -8px">Start Technological Innovation</div>
            </div>
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
