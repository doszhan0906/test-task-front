<template>
	<section>
		<div class="container">
			<div class="header">
				<div>
				ОРГАНИЗАЦИОННАЯ СТРУКТУРА
				</div>
				<button class="add" @click="addNewDivision">+ Добавить</button>
			</div>
			<div class="table">
				<div class="table-header flex">
					<div>
					</div>
					<div>
						Общее количество
					</div>
					<div>
						Фактическое количество
					</div>
					<div>
						Действия
					</div>
				</div>
				<div class="table-body">
					<child-controller 
						v-for="(node,node_index) in divisions" 
						:key="node_index" 
						:node="node"
						:depth=0
					/>
				</div>
			</div>
		</div>
		<addNewDivision />
	</section>
</template>
<script>
import childController from './childController.vue'
import addNewDivision from './addNewDivision.vue'
export default {
	name: 'page',
	components: {childController,addNewDivision},
	data () {
		return {
			addNewOpen: false
		}
	},
	methods: {
		addNewDivision(){
			this.$store.commit('addNewDivisionModalChange')
		},
		closeModal () {
			this.addNewOpen = false;
		}
	},
	computed: {
		divisions () {
			return this.$store.state.divisions
		}
	}
}
</script>
<style>
	body{
		font-family: 'Open Sans', sans-serif;
	}
	:root {
		--header-bg-color: #3a5064;
	}
	.flex {
		display: flex;
	}
</style>
<style>
	.container{
		max-width: 1170px;
		margin: auto;
		height: 1000px;
	}
	.header div{
		color: #FFF;
		padding: 10px 16px;
		margin: 0;
		background-color: var(--header-bg-color);
		font-weight: 600;
		height: 40px;
		display: flex;
		align-items: center;
	}
	.header button{
		margin: 10px 16px;
		font-size: 16px;
	}
	.table-header{
		background-color: var(--header-bg-color);
		color: #FFF;
		height: 40px;
		display: flex;
		align-items: center;
	}
	.table-header div:first-child{
		flex: 0 0 40%;
	}
	.table-header div {
		flex: 0 0 20%;	
	}
	.table-row div:first-child {
		padding-left: 16px;
	}
</style>