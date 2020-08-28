<template>
  <div class="flex flex-center q-px-md q-pa-md">
    <div class="column items-center">
      <div>
        <div>
          <div class="row">
            <div
              :key="index"
              class="col-12 col-sm-6 col-md-4"
              v-for="(post, index) in posts"
            >
              <blog-card :post="post"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {get} from 'vuex-pathify'

  export default {
    name: "BlogMenu",
    computed: {
      posts: get('blog/posts'),
      tabs: get('blog/categories'),
    },
    data() {
      return {
        toggle: false,
      }
    },
    components: {
     // SFilter: () => import('src/components/shared/Filter'),
      BlogCard: () => import('./BlogCard')
    }
  }
</script>

<style scoped>

</style>
