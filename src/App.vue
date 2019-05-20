<style lang='scss' scoped>
#root {
	width: 100%;
	line-height: 100px;
	font-size: 16px;
	color:black;
	text-align: center;
}
.loading-area {
	width: 100%;
	height: 500px;
	position: relative;
}
</style>

<template>
	<div id="root">
		
		square

		<button @click="showLoading = !showLoading">click me, show loading</button>

		<div class="loading-area">
			<sq-loading :show="showLoading"></sq-loading>
		</div>
		
	</div>
</template>

<script>

export default {
	name: 'root',
	data() {
		return {
			showLoading: false
		}
	},
	computed: {
		
	},
	mounted() {
		
	},
	destroyed() {
		
	},
	methods: {
		
	}
}
</script>