<template>
	<section>
		<div class="container">
			<div class="header">
				<div>
				ОРГАНИЗАЦИОННАЯ СТРУКТУРА
				</div>
				<button class="add">+ Добавить</button>
			</div>
			<div class="table">
				
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'page'
}
</script>
<style scoped>
:root {
  --header-bg-color: #3a4651;
}
.container{
	max-width: 1170px;
	margin: auto;
	height: 1000px;
}
.header div{
	padding: 10px 16px;
	margin: 0;
	background-color: var(--header-bg-color);
}
</style>