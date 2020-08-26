<template>
  <q-drawer
    elevated
    q-drawer
    show-if-above
    side="right"
    v-model="drawer"
  >
    <q-list>
      <q-item-label
        class="text-grey-8"
        header
      >
      </q-item-label>
      <links
        :key="link.title"
        v-bind="link"
        v-for="link in links"
      />
    </q-list>
  </q-drawer>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "CoreDrawer",
    components: {
      Links: () => import('src/components/shared/Link')
    },
    computed: {
      ...mapGetters({
        toggle: 'GET_DRAWER',
        links: 'GET_LINKS'
      }),
      drawer: {
        get() {
          return this.toggle
        },
        set() {
          return this.setDrawer()
        }
      }
    },
    methods: {
      ...mapActions({
        setDrawer: 'SET_DRAWER'
      })
    }
  }
</script>

<style scoped>

</style>
