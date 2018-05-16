<template>
	<div class='header'>
		<slot></slot>
		<i class='iconfont icon-huidingbu' v-if='back' @click='goBack'></i>
	</div>
</template>
<script>
	export default {
		props:{
			back:{
				type:Boolean,
				default:false  //默认不显示
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);  //返回一级
			}
		}
	}
</script>
<style scoped>
/* 加了scoped说明这个样式只能在此作用域 */
	.header{
		position: fixed;
		top: 0;
		width: 100%;	
		background: red;
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-weight: 700;
		i{
			position: absolute;
			left: 10px;
			font-size: 20px;
		}
	}
</style>