<style lang='scss' scoped>
.root {
	width: 100%;
}
.dialog-content {
	line-height: 36px;
  font-size: 14px;
  padding-left: 10px;
}
</style>

<template>
	<div class="root">
		<sq-button type="confirm" @click="onClick">确认</sq-button>
		<sq-button>取消</sq-button>
		<sq-dialog v-model="showDialog" title="删除多个项目" @confirm="onConfirm" :close-by-esc="true">
			<div class="dialog-content">
				确认永久删除这4项
			</div>
		</sq-dialog>
	</div>
</template>

<script>
export default {
	name: 'root',
	data() {
		return {
			showDialog: false,
		}
	},
	computed: {
		
	},
	mounted() {
		
	},
	destroyed() {
		
	},
	methods: {
		onClick() {
      this.showDialog = true
    },
    onConfirm() {
      
    }
	}
}
</script>