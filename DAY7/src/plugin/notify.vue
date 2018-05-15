<template>
	<div>
		<div class='notify'>{{msg}}</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				msg:'初始化的插件'
			}
		}
	}
</script>
<style scoped>
/* 加了scoped说明这个样式只能在此作用域 */
	.notify{
		width: 300px;
		height: 50px;
		background-color: rgba(0,0,0,0.32);
		border-radius: 15px;
		line-height: 50px;
		text-align: center;

	}
	
</style>