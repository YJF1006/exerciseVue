<template>
	<div>
		<!-- 3. 使用组件 -->
		<Header :back='true'>首页</Header>
		<div class="content">
			<Swiper :swiperSlides='sliders'></Swiper>
		</div>
		
	</div>
</template>
<script>
	//1.引入Header头部,轮播图 基本组件
	import Header from '../base/Header.vue';
	import Swiper from '../base/Swiper.vue'; 
//引入轮播图的接口
	import {getSliders} from '../api';
	export default {
		async created(){  //页面加载以后发送axios请求,通过语法糖不用resolve 和reject就可以拿到返回的Promise实例
			let {data:sliders} = await getSliders();//用对象的解构取得了data(否则就得result.data)，给data重新起名叫sliders,对象中的属性名字必须和得到的结果的名字一致
			//console.log(sliders);
			this.sliders = sliders;  //把获取的数据放到sliders
		},
		data(){
			return {
				sliders:[]
			}
		},
		methods:{},
		computed:{},
		components:{
			//2.注册组件
			Header,
			Swiper
		}
	}
</script>
<style scoped>
/* 加了scoped说明这个样式只能在此作用域 */
	
</style>