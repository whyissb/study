import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapse:false,
    username:Cookie.get('username'),
  },
  getters: {
  },
  mutations: {
    setCollapse(state){
      state.collapse=!state.collapse
    }
  },
  actions: {
  },
  modules: {
  }
})
