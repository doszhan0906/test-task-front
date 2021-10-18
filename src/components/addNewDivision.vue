<template>
	<modal v-show="showModal">
		<template v-slot:footer>
			<button @click="closeModal">Close</button>
		</template>
	</modal>
</template>
<script>
import modal from './modal.vue'
export default {
	components: {modal},
	computed: {
		showModal(){
			return this.$store.state.addNewDivisionModal
		}
	},
	methods: {
		closeModal () {
			this.$store.commit('addNewDivisionModalChange')
		}
	},
}
</script>