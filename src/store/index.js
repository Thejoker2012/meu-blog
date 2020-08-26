import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'

import * as modules from './modules'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules,
    state: {
      drawer: false,
      links: [
        {
          title: 'Home',
          caption: 'home',
          icon: 'dashboard',
          link: '/'
        },
        {
          title: 'Blog',
          caption: 'blog',
          icon: 'book',
          link: '/blog'
        },
        {
          title: 'Contact',
          caption: 'contact',
          icon: 'code',
          link: '/contact'
        }
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
