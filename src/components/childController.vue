<template>
	<div class="tree-menu">
		<div class="tree-node flex">
			<div :style="indent" @click="collapseTree($event)"><i class="fa icon" :class="arrowIconClass" v-if="hasChild"/>{{ node.name }}</div>
			<div>{{this.totalCount()}}</div>
			<div>{{node.count}}</div>
			<div>
				<i class="fa fa-pencil icon" @click="editDivision"/>
				<i class="fa fa-times-circle icon" @click="deleteDivisionOpen"/>
			</div>
		</div>
		<tree-menu 
			v-for="(node, node_key) in node.children"
			v-show="isActive"
			:key="node_key"
			:node="node"
			:depth="depth + 1"
		>
		</tree-menu>
		<modal v-show="editModal">
			<template v-slot:header>
				Изменение
				<button @click="closeModal" class="close-btn">X</button>
			</template>
			<template v-slot:body>
				<div>
					<input placeholder="Город" v-model="city">
					<input type="number" placeholder="Количество" v-model="count">
				</div>
				<button @click="saveData">Сохранить</button>
			</template>
		</modal>
		<modal v-show="deleteModal">
			<template v-slot:header>
				Подтверждаете удаление ?
				<button @click="closeDeleteModal" class="close-btn">X</button>
			</template>
			<template v-slot:body>
				<button @click="deleteDivision">Да</button>
			</template>
		</modal>
	</div>
</template>
<script>
import modal from './modal.vue'
export default { 
	props: [ 'node', 'depth'],
	name: 'tree-menu',
	components: {modal},
	data() {
		return {
			isActive: false,
			city: '',
			count: 0,
			editModal: false,
			deleteModal: false
		}
	},
	methods: {
		collapseTree (event) {
			event.preventDefault();
			this.isActive = !this.isActive
		},
		totalCount (node = this.node) {
			let tCount = parseInt(node.count);
			for(const i in node.children) {
				return tCount + this.totalCount(node.children[i])
			}
			return tCount
		},
		closeModal () {
			this.editModal = false;
		},
		editDivision () {
			console.log(this.node);
			this.editModal = true;
		},
		saveData () {
			this.$store.commit('editDivision', {name: this.city, count: this.count, id: this.node.id});
			this.editModal = false;
		},
		closeDeleteModal() {
			this.deleteModal = false;
		},
		deleteDivisionOpen () {
			this.deleteModal = true;
		},
		deleteDivision () {
			this.$store.commit('deleteDivision', this.node.id)
			this.deleteModal = false
		}
	},
	computed: {
		indent() {
			return { transform: `translate(${this.depth * 30}px)` }
		},
		arrowIconClass () {
			return this.isActive ? 'fa-chevron-down' : 'fa-chevron-right'
		},
		hasChild () {
			return this.node.children
		}
	}
}
</script>
<style scoped>
	.tree-node{
		cursor: pointer;
	}
	.tree-node div{
		flex: 0 0 20%;
	}
	.tree-node div:first-child{
		flex: 0 0 40%;
	}
	.icon {
		margin-right: 10px;
		color: rgba(0,0,0, 0.5);
	}
</style>