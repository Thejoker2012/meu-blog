<template>
  <div>
    <div class="text-center q-pa-sm">
      <q-btn
        @click="showTabs = !showTabs"
        color="bg-dark"
        outline
        round
      >
        <q-icon name="mdi-view-dashboard" size="30px"/>
      </q-btn>
    </div>


    <q-menu anchor="center middle" fit self="top middle">
      <q-item
        style="width: 200px; text-align: center"
        :href="`#${tab}`"
        :key="index"
        :label="tab"
        v-for="(tab, index) in categories"
        clickable
        @click="onClick(tab, $event)"
      >
        {{tab}}
      </q-item>
    </q-menu>
  </div>
</template>

<script>
  import {sync} from 'vuex-pathify'

  export default {
    name: "SFilter",
    data: () => ({
      showTabs: false
    }),
    computed: {
      ...sync('photographs', [
        'categories',
        'filter'
      ])
    },
    methods:{
      onClick(item, $event){
        console.log($event);
        console.log(item);
      }
    }

  }
</script>

<style scoped>

</style>
