<template>
  <q-layout view="hHr Lpr ffr" class="no-scroll no-scrollbar">

    <core-app-bar/>

    <core-drawer/>

    <q-page-container >
      <router-view/>
    </q-page-container>

    <core-footer/>

  </q-layout>
</template>

<script>

  export default {
    name: 'Layout',
    components: {
      CoreAppBar: () => import('src/components/core/AppBar'),
      CoreDrawer: () => import('src/components/core/Drawer'),
      CoreFooter: () => import('src/components/core/Footer'),
    }
  }
</script>
