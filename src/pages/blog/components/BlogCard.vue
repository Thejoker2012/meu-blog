<template>

  <div
    class="q-pa-sm"
  >
    <q-card
      @click="onClick(post)"
    >
      <q-img :src="post.src">
        <div class="absolute-bottom-left text-subtitle2">
          {{post.category}}
        </div>
      </q-img>

      <div class="q-px-sm q-pb-sm">
        <q-card-section>
          <div class="text-h6">{{post.title}}</div>
          <div class="text-subtitle2 text-caption">{{post.date}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{post.blurb}}
        </q-card-section>
      </div>


    </q-card>
  </div>

</template>

<script>
  export default {
    name: "BlogCard",
    props: {
      post: {
        type: Object,
        default: () => ({
          category: undefined,
          date: undefined,
          blurb: undefined,
          src: undefined,
          title: undefined,
        }),
      },
    },
    methods: {
      onClick(post) {
        this.$router.push(`/blog-post/${post.id}`)
      },
    },
    computed: {}
  }
</script>

<style scoped>

</style>
