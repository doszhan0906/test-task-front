<template>
	<modal v-show="showModal">
		<template v-slot:header>
			Добавление
			<button @click="closeModal" class="close-btn">X</button>
		</template>
		<template v-slot:body>
			<div>
				<input placeholder="Город" v-model="city">
				<input type='number' placeholder="Количество" v-model="count">
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
			const new_id = this.getLastId();
			this.$store.commit('addNewDivision',{name: this.city, count: this.count, id: new_id + 1});
			this.city = '';
			this.count = '';
			this.closeModal();
		},
		getLastId (array = this.$store.state.divisions, last=0) {
			if(array[array.length - 1].children && array[array.length - 1].children.length) {
				return this.getLastId(array[array.length - 1].children, last)
			}
			return array[array.length - 1].id;
			
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