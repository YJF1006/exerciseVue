<template>
	<div>
		<!-- 3. 使用组件 -->
		<Header :back='true'>首页</Header>
		
		<div class="content">
			<!-- 若是加载中显示这一块 -->
			<Loading v-if='loading'></Loading>
			<!-- 若不是加载就显示这一块 -->
			<template v-else>
				<Swiper :swiperSlides='slidersData'></Swiper>
				<div class="container">
				<h3>热门图书</h3>
					<ul>
						<router-link v-for='(hot,index) in hotBookData'  :key='index' :to='{name:"detail",params:{did:hot.bookId}}'  
						tag='li' >
							<img :src="hot.bookCover"><br>
							<b>{{hot.bookName}}</b>
						</router-link>
					</ul>
				</div>
			</template>
				
		</div>
		
	</div>
</template>
<script>
	//1.引入Header头部,轮播图 基本组件
	import Header from '../base/Header.vue';
	import Swiper from '../base/Swiper.vue'; 
//引入轮播图的接口
	// import {getSliders,getHotBook} from '../api/index.js';
	import {getAll} from '../api/index.js';  //(因为将两个方法合并了)
	import Loading from '../base/Loading.vue';

	export default {
		created(){  //页面加载以后发送axios请求（把逻辑放到了methods）
			// this.sliders();//获取轮播图
			// this.hotBook();  //获取热门图书
			this.getData();
		},
		data(){
			return {
				slidersData:[],  //轮播图数据
				hotBookData:[],  //热门图书数据
				loading:true    //
			}
		},
		methods:{
			// async sliders(){
			// 	//通过语法糖不用resolve 和reject就可以拿到返回的Promise实例 await后面是接口名
			// 	//let {data} = await getSliders();//用对象的解构取得了data(否则就得result.data)，也可以给data重新起名叫sliders,对象中的属性名字必须和得到的结果的名字一致例如{data:sliders}
			// 	//console.log(sliders);
				
			// 	//后台加了拦截器之后 相当于把res.data拦截变成了data
			// 	this.slidersData  = await getSliders();  
			// 	 //把获取的数据放到sliders
			// },

			// async hotBook(){  //语法糖直接取到返回的数据不用通过then()方法了
			// 	this.hotBookData = await getHotBook();
			// }
			
			async getData(){
				let [sliders,hotBook] = await getAll();  //返回的结果是一个数组 数组中的第一个参数是第一个请求的返回结果数组  依次类推
								//  [slidersData,hotBookData]
				this.slidersData = sliders;
				this.hotBookData = hotBook;   //轮播图和热门图书全部获取完毕
				this.loading = false;    //加载中的文字不显示了
			}

		},
		computed:{},
		components:{
			//2.注册组件
			Header,
			Swiper,
			Loading
		}
	}
</script>
<style scoped lang='less'>
/* 加了scoped说明这个样式只能在此作用域 */
	h3{
		color: #999;
	}
	.container{
		width: 90%;
		margin: 0 auto;
		ul{
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;	/* 换行 */
			/* flex-wrap 换行(当超过规定宽度自动换行)  默认不换行 */
			li{
				width: 48%;
				text-align: center;
				border:1px dashed #ccc;
				margin: 1px;
				b{
					font-size: 12px;
				}

			}
		}
	}
</style>