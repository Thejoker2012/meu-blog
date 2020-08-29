import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'src/boot/pathify'

import * as modules from './modules'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules,
    state: {
      drawer: false,
      links: [
        {
          title: 'Página Inicial',
          color: 'startis-green',
          icon: 'dashboard',
          link: 'blog'
        },
        {
          title: 'Contato',
          color: 'startis-yellow',
          icon: 'mail',
          link: 'contact'
        },
        {
          title: 'Sobre',
          color: 'startis-bluemarine',
          icon: 'person',
          link: 'about'
        },
      ]
    },
    getters: {
      GET_DRAWER(state){
        return state.drawer
      },
      GET_LINKS(state){
        return state.links
      }
    },

    mutations: {
      SET_DRAWER(state) {
          state.drawer = !state.drawer
      }
    },

    actions:{
      SET_DRAWER({commit}){
        return commit('SET_DRAWER')
      }
    },

    strict: process.env.DEV,

    plugins: [pathify.plugin],

  })

  return Store
}
