import {make} from 'vuex-pathify'

const icons = [
  {icon: 'mdi-twitter', color: 'blue-5',to:'https://www.facebook.com/'},
  {icon: 'mdi-facebook', color: 'blue-10' , to:'https://twitter.com/'},
  {icon: 'mdi-instagram', color: 'red-5' , to:'https://www.instagram.com/'},
  {icon: 'mdi-whatsapp', color: 'green-7' , to:'https://www.instagram.com/'},
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
