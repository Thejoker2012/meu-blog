<template>
  <q-item
    clickable
    :to="{name : link}"
    class="text-center"
    style="margin: 0 2px"
    exact
    active-class="bg-grey-2"
  >
    <q-item-section
      class="q-pl-sm"
      v-if="icon"
      avatar
    >
      <q-icon class="q-px-none" :color="color" :name="icon" />
    </q-item-section>

    <q-item-section
      class="q-pr-none"
    >
      <q-item-label class="q-pr-none text-uppercase text-weight-medium">{{ title }}</q-item-label>
      <q-item-label v-if="false" caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'Link',
  props: {
    title: {
      type: String,
      required: true
    },

    color: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
