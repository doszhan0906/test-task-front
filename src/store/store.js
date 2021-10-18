import Vue from 'vue'
import Vuex from 'vuex'
import divisions from '../assets/divisions.json';
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		addNewDivisionModal: false,
		divisions: divisions
	},
	mutations: {
		increment (state) {
		state.count++
		},
		addNewDivisionModalChange (state) {
			state.addNewDivisionModal = !state.addNewDivisionModal
		},
		addNewDivision (state, data) {
			state.divisions.push(data);
		}
	}
})
export default store;