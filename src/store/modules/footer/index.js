import {make} from 'vuex-pathify'

const icons = [
  {icon: 'mdi-twitter', color: 'grey-7',to:'https://www.facebook.com/'},
  {icon: 'mdi-facebook', color: 'grey-7' , to:'https://twitter.com/'},
  {icon: 'mdi-instagram', color: 'grey-7' , to:'https://www.instagram.com/'},
];

const state = {
  icons,
};

const mutations = make.mutations(state);

export default {
  namespaced: true,
  state,
  mutations,
}
