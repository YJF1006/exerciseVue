<template>
	<div>计数器:  <button @click='reduceCount'>-</button> <br>
		当前：{{$store.state.count}} <br>
		计数器：  <button @click = 'addCount'>+</button>

		{{$store.getters.val}}
		
	</div>
</template>
<script>
	import * as Types from '../store/mutations-type.js';   //引入mutations的宏
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			addCount(){
				/*提交add的mutation  会去找mutation里面add的方法
				参数1. mutation里面的哪个方法
				参数二： 载荷 payload
				*/
				this.$store.commit(Types.INCREASE,2)	 //每次增加2
			},
			reduceCount(){
				this.$store.commit(Types.DECREASE,1)   //每次减1
			}

		},
		computed:{},
		components:{}
	}
</script>
<style scoped>
/* 加了scoped说明这个样式只能在此作用域 */
	
</style>