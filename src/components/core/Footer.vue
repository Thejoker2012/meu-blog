<template>
  <q-footer class="footer-style text-white flex flex-center" elevated>
    <q-toolbar class="container">
      <div class="full-width items-center column">
        <div class="q-my-sm">
          <q-btn
            :color="icon.color"
            :icon="icon.icon"
            :key="index"
            size="15px"
            type="a"
            :href="icon.to"
            flat
            round
            v-for="(icon, index) in icons"
          />
        </div>
        <div class="text-subtitle1 text-dark">Copyright &copy; {{ date }}&nbsp;<strong>Iago Santos</strong></div>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script>
  import {get} from 'vuex-pathify'

    export default {
      name: "CoreFooter",
      data() {
        return {
          date: (new Date().getFullYear()),
        }
      },
      computed:{
        icons:get('footer/icons')
      }
    }
</script>

<style scoped>

</style>
