<template>
  <q-header class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>
        Title
      </q-toolbar-title>

      <q-btn @click="drawer" dense flat icon="menu" round/>
    </q-toolbar>
  </q-header>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "CoreAppBar",
    methods: {
      ...mapActions({
        drawer: 'SET_DRAWER'
      }),
    }
  }
</script>

<style scoped>

</style>
