<template>
	<div class="tree-menu">
		<div class="tree-node flex" @click="collapseTree">
			<div :style="indent">{{ node.name }}</div>
			<div>{{1000}}</div>
			<div>{{node.count}}</div>
		</div>
		<tree-menu 
			v-for="(node, node_key) in node.children"
			:key="node_key"
			:node="node"
			:depth="depth + 1"
			v-show="isActive"
		>
		</tree-menu>
	</div>
</template>
<script>
	export default { 
		props: [ 'node', 'children', 'depth' ],
		name: 'tree-menu',
		data() {
			return {
				isActive: false
			}
		},
		methods: {
			collapseTree () {
				this.isActive = !this.isActive
			}
		},
		computed: {
			indent() {
				return { transform: `translate(${this.depth * 30}px)` }
			}
		}
	}
</script>
<style scoped>
	.tree-node div{
		flex: 0 0 20%;
	}
	.tree-node div:first-child{
		flex: 0 0 40%;
	}
</style>

</style>