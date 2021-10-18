<template>
	<section>
		<div class="container">
			<div class="header">
				<div>
				ОРГАНИЗАЦИОННАЯ СТРУКТУРА
				</div>
				<button class="add" @click="addNewCity">+ Добавить</button>
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
					<div class="table-row flex">
						<div>
							<span>
								Нур-Султан
							</span>
						</div>
						<div>
							100
						</div>
						<div>
							15
						</div>
						<div>
							<i class="fa fa-pencil"></i>
							<i class="fa fa-close"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'page',
	methods: {
		addNewCity(){
			
		}
	}
}
</script>
<style>
	body{
		font-family: 'Open Sans', sans-serif;
	}
	:root {
		--header-bg-color: #5581a9;
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
	}
	.header button{
		margin: 10px 16px;
		font-size: 16px;
	}
	.table {
		border-collapse: collapse;
	}
	.table-header{
		background-color: var(--header-bg-color);
		color: #FFF;
	}
	.table-header div, .table-row div{
		flex: 0 0 25%;
	}
	.table-row {
		justify-content: space-around;
	}
</style>