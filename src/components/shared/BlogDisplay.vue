<template>
  <q-img
    :src="image"
    class="blog-display"
  >
    <div class="absolute-full flex flex-center text-display text-weight-thin">
      {{title}}
    </div>
  </q-img>
</template>

<script>
  export default {
    name: "BlogDisplay",
    props: {
      title: {
        default: 'Iago Santos - Blog',
        type: String
      },
      image: {
        type: String,
        default: "`require('src/assets/painel_principal.jpg')`"
      }
    }
  }
</script>

<style scoped>

</style>
