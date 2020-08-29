const socials = [
  {
    icon: 'mdi-facebook',
    text: 'Facebook',
    color: 'facebook',
    action: '',
    href: 'https://www.facebook.com/sharer/sharer.php?u='
  },
  {
    icon: 'mdi-google-plus',
    text: 'Google+',
    color: 'google',
    action: 'share/whatsapp/share',
    href: 'whatsapp://send?text=The text to share!'
  },
  {
    icon: 'mdi-twitter',
    text: 'Twitter',
    color: 'twitter',
    action: 'share/whatsapp/share',
    href: 'whatsapp://send?text=The text to share!'
  },
  {
    icon: 'mdi-pinterest',
    text: 'Pinterest',
    color: 'red',
    action: 'share/whatsapp/share',
    href: 'whatsapp://send?text=The text to share!'
  },
  {
    icon: 'mdi-whatsapp',
    text: 'Whatsapp',
    color: 'green',
    action: 'share/whatsapp/share',
    href: 'https://wa.me/?text=',
  },
];


import {make} from 'vuex-pathify'

const state = {
  socials,
};


const mutations = make.mutations(state);

export default {
  namespaced: true,
  state,
  mutations,
}
