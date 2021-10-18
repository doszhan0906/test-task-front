<template>
	<modal v-show="showModal">
		<template v-slot:header>
			Добавление
			<button @click="closeModal" class="close-btn">X</button>
		</template>
		<template v-slot:body>
			<div>
				<input placeholder="Город" v-model="city">
				<input placeholder="Количество" v-model="count">
			</div>
			<button @click="submitData">Отправить</button>
		</template>
	</modal>
</template>
<script>
import modal from './modal.vue'
export default {
	components: {modal},
	data() {
		return {
			city: '',
			count: ''
		}
	},
	computed: {
		showModal(){
			return this.$store.state.addNewDivisionModal
		}
	},
	methods: {
		closeModal () {
			this.$store.commit('addNewDivisionModalChange')
		},
		submitData () {
			this.$store.commit('addNewDivision',{name: this.city, count: this.count});
			this.city = '';
			this.count = '';
			this.closeModal();
		}
	},
}
</script>
<style>
	input {
		margin-top: 10px;
	}
	.close-btn {
		float: right;
	}
</style>