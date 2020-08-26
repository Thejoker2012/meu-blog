<template>
  <q-layout view="hHr Lpr ffr">

    <core-app-bar/>

    <core-drawer/>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Footer
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>

  export default {
    name: 'Layout',
    components: {
      CoreAppBar: () => import('src/components/core/AppBar'),
      CoreDrawer: () => import('src/components/core/Drawer')
    }
  }
</script>
