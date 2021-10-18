import Vue from 'vue'
import Vuex from 'vuex'
import divisions from '../assets/divisions.json';
import recursionIds from '../helpers/recursionIds.js';
Vue.use(Vuex)
recursionIds(divisions);
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
		},
		deleteDivision (state, id) {
			const divisions = state.divisions;
			const removeFromTree = (tree,indToDelete, parent) => {
				for (const index in tree) {
					if (tree[index].id === indToDelete) {
						if (parent) {
							parent.children.splice(index, 1);
						}
						else {
							tree.splice(index, 1);
						}
						return;
					}
					removeFromTree(tree[index].children, indToDelete, tree[index]);
				}
			};
			removeFromTree(divisions, id)
		}
	}
})
export default store;