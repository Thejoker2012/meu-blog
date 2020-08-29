<template>
  <q-page class="flex justify-center bg-grey-4">
    <div class="container" id="scrollTop">
      <blog-display :title="post.category" :image="post.src"/>
      <div class="q-py-sm">
        <div class="row justify-center">
          <div class="col-11 col-md-7">
            <h1 class="text-h3 text-weight-bold">{{post.title}}</h1>
            <div class="text-uppercase text-weight-bold text-body2 q-pb-xl">
              {{post.date}} / {{post.category}}
            </div>
          </div>
          <template
            v-for="(t, index) in post.text"
          >
            <div
              :key="`col-${index}`"
              class="col-11 col-md-7"
            >
              <div
                :key="`p-${index}`"
                class="text-body1"
                v-html="t">
              </div>
            </div>

            <div
              :key="`img-${index}`"
              class="col-11 q-my-xl"
              v-if="post.images[index]"
            >
              <q-img
                :src="post.images[index]"
                height="400px"
              ></q-img>
            </div>

          </template>

          <div class="col-12 flex justify-center q-my-lg">
            <q-btn
              :color="social.color"
              :href="social.href"
              :key="index"
              :target="social.action"
              class="text-white size-btn-social no-border-radius"
              type="a"
              v-for="(social, index) in socials"
            >
              <q-icon
                :name="social.icon"
                left
              />
              {{social.text}}
            </q-btn>
          </div>

        </div>
      </div>
    </div>
    <div class="container q-py-md text-grey-8 q-px-lg">
      <div class="row" >
        <q-tabs
          class="text-grey-10 fixed-bottom tabar-footer-android transparent "
        >
          <q-tab
            :disable="post.id === 1"
            @click="decrementId"
            class="q-mx-xl"
          >
            <div class="flex flex-inline items-center">
              <q-icon name="mdi-chevron-left" size="40px"/>
              <div class="desktop-only">Last Post</div>
            </div>
          </q-tab>

          <q-route-tab
            to="/blog"
          >
            <q-icon name="mdi-view-dashboard" size="40px"/>
          </q-route-tab>

          <q-tab
            :disable="post.id === posts.length"
            @click="incrementId"
            class="q-mx-xl"
          >

            <div class="flex flex-inline items-center">
              <div class="desktop-only">Next Post</div>
              <q-icon name="mdi-chevron-right" size="40px"/>
            </div>
          </q-tab>
        </q-tabs>
      </div>
    </div>

    <!--    <div class="container q-py-lg bg-grey-1">-->
    <!--      <div class="row justify-center">-->
    <!--        <div class="col-11 col-md-7">-->
    <!--          <h4 class="text-h4 text-weight-bold q-mb-md">-->
    <!--            Comments:-->
    <!--          </h4>-->
    <!--          <template-->
    <!--            v-for="(comment, index) in post.comments"-->
    <!--          >-->
    <!--            <blog-post-comment-->
    <!--              :comment="comment"-->
    <!--              :key="index"-->
    <!--            />-->
    <!--          </template>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <q-page-scroller :offset="[18, 18]" :scroll-offset="150" class="desktop-only" position="bottom-right">
      <q-btn color="accent" fab icon="keyboard_arrow_up"/>
    </q-page-scroller>
  </q-page>
</template>

<script>
  import Post from 'src/models/Post'
  import {get} from 'vuex-pathify';
  import findById from 'src/utils/findById'

  import scrollTopPage from 'src/utils/scrollTop'

  export default {

    name: 'PageIndex',
    data() {
      return {
        id: this.$route.params.id,
        post: new Post(),
        postRoute: '',
      }
    },
    components: {
      BlogDisplay: () => import('src/pages/blog/components/BlogDisplay'),
    },

    mounted() {
      this.post = findById(this.posts, this.id);
    },

    watch: {
      id(novo) {
        this.post = findById(this.posts, novo);
      }
    },
    methods: {

      incrementId() {
        if (this.id >= 1 && this.id <= this.posts.length) {
          this.scrollToElement();
          return this.id++;
        }
        return this.posts.length;
      },

      decrementId() {
        if (this.id >= 1 && this.id <= this.posts.length) {
          this.scrollToElement();
          return this.id--;
        }
        return '';
      },

      scrollToElement() {
        const el = document.getElementById("scrollTop");
        return scrollTopPage(el);
      }

    },

    computed: {
      posts: get('blog/posts'),
      socials: get('social/socials'),
    },
}
</script>
