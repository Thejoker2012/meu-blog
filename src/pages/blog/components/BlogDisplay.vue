<template>
  <q-img
    class="blog-display"
    :src="image"
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
        default: 'StarTIS - Blog',
        type: String
      },
      image: {
        type: String,
        default: require('src/assets/painel_principal.jpg')
      }
    }
  }
</script>

<style scoped>

</style>
