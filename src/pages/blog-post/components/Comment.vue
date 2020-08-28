<template>
  <div class="row">
    <div class="col-auto">
      <q-avatar
        color="grey"
        size="56px"
      >
        <q-img
          :src="comment.avatar"
        />
      </q-avatar>
    </div>
    <div :col="nested ? 12 : 11" class="col">
      <div class="row">
        <div
          class="col col-12 col-md-6 text-body1 text-weight-bold">
          {{comment.user}}
        </div>
        <div
          class="col-6 col-md-3 text-right text-body2 text-weight-bold text-uppercase text-no-wrap">
          {{comment.date}}
        </div>
        <div
          class="col-6 col-md-3 text-right text-body2 text-weight-bold text-uppercase">
          Reply
        </div>

        <div
          class="col-12 text-grey-4 text-dark text-subtitle1">
          {{comment.text}}
        </div>

        <template
          v-if="comment.replies && comment.replies.length"
        >
          <template
            v-for="(reply, index) in comment.replies"
          >
            <blog-pots-comment
              :comment="reply"
              :key="index"
              class="q-mx-none q-mx-md-lg"
            ></blog-pots-comment>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogPotsComment",
    props: {
      comment: {
        type: Object,
        default: () => ({
          avatar: undefined,
          user: undefined,
          date: undefined,
          replies: [],
          text: undefined,
        }),
      },
      nested: {
        type: Boolean,
        default: false,
      },
    }
  }
</script>

<style scoped>

</style>
