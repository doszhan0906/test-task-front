import Vue from 'vue'
import Vuex from 'vuex'
import divisions from '../assets/divisions.json';
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    divisions: divisions
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default store;