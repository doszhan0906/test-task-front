<template>
	<section>
		<div class="container">
			<div class="header">
				<div>
				ОРГАНИЗАЦИОННАЯ СТРУКТУРА
				</div>
				<button class="add">+ Добавить</button>
			</div>
			<table>
				<thead>
					<tr>
						<td>

						</td>
						<td>
							Общее количество
						</td>
						<td>
							Фактическое количество
						</td>
						<td>
							Действия
						</td>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
			</table>
		</div>
	</section>
</template>
<script>
export default {
	name: 'page'
}
</script>
<style>
	body{
		font-family: 'Open Sans', sans-serif;
	}
	:root {
		--header-bg-color: #5581a9;
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
	table {
		width: 100%;
		border-collapse: collapse;
	}
	table thead{
		background-color: var(--header-bg-color);
		color: #FFF;
	}
</style>