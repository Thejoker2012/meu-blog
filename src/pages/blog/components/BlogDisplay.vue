<template>
  <q-img
    class="blog-display"
    src="https://cdn.quasar.dev/img/parallax2.jpg"
  >
    <div class="absolute-full flex flex-center text-display text-weight-thin">
      {{title}}
    </div>
  </q-img>
</template>

<script>
  export default {
    name: "BlogDisplay",
    data() {
      return {
        title: 'Iago Santos - Blog'
      }
    }
  }
</script>

<style scoped>

</style>
