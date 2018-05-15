<!-- template必须要有一个根元素  所以一般把东西都用一个div包裹起来 -->
<template>  
	<div>
		{{msg}}
<!-- 		<router-view></router-view> -->
		<button @click="remove">notify</button>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				msg:"hello"
			}
		},
		methods:{
			remove(){
				this.$notify('我是插件写的，过几分钟就会消失',{delay:1000});   //不传的话默认
			}
		}

	}
</script>


