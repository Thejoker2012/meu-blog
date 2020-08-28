<template>
  <q-page class="flex justify-center bg-grey-2">
    <div class="container">
      <blog-display/>
      <blog-menu/>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components:{
    BlogDisplay: () => import('./components/BlogDisplay'),
    BlogMenu: () => import('./components/BlogMenu')
  }

}
</script>
