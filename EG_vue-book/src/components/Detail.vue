<template>
	<!-- 通过给这个盒子加样式，让他的层级变高 ，这样就遮住了下面的导航栏了 -->
	<div class='detail'>
		<Header :back="true">详情</Header>
		<div class='content'>	
			<ul>
				<li>
					<label for="bookName">书的名称</label>
					<input type="text" v-model='book.bookName' id='bookName'>
				</li>
				<li>
					<label for="bookInfo">书的信息</label>
					<input type="text" v-model='book.bookInfo'  id='bookInfo'>
				</li>
				<li>
					<label for="bookprice">书的价格</label>
					<input type="text" v-model.number='book.bookprice'  id='bookprice'>
				</li>
				<li><button @click='update'>确认修改</button></li>
			</ul>
		</div>
	</div>
</template>
<script>
	import Header from '../base/Header.vue';
	import {findOne,updateBook} from '../api/index.js';
	export default {
		created(){ //页面有加载就需要根据id发送请求
			this.oneBook();
		},
		watch:{ 
			$route(){ //监控$route  只要路由一变就刷新页面，就重新获取数据
				this.oneBook();
			}
		},
		data(){
			return {
				book:{}
			}
		},
		methods:{
			//通过id找到对应的书后，赋给book
			async oneBook(){   //语法糖直接获取到返回的实例（已经有个拦截器处理过了，所以可以直接赋给）
				this.book = await findOne(this.did);  //book没有值就会返回空对象，如果是空对象就会跳转到列表页				
				//如果book的keys没有就说明是空对象
				Object.keys(this.book).length>0?void 0:this.$router.push('/list')
				//有值什么都不干 void 0
				//没值得话就跳转到列表页
			},

			//修改图书信息
			async update(){
				await updateBook(this.did,this.book);
				this.$router.push('/list');  //修改完成后跳转页面
			}
		},
		computed:{
			did(){
				return this.$route.params.did   // 路由属性上的params属性上的did ,将路径参数的did映射到参数上
			}
		},
		components:{
			Header
		}
	}
</script>
<style scoped lang ='less'>
/* 加了scoped说明这个样式只能在此作用域 */
	.detail{  /* 通过给这个盒子加样式撑开，让他的层级变高 ，这样就遮住了下面的导航栏了 */
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
		z-index: 32;
/* 完成了遮罩 */
	}
	.content{	
		ul{
			margin: 50px,20px,0px,20px;
			li{
				label{
					display: block;
					font-size: 20px;
				}
				input{
					height: 25px;
					width: 100%;
					margin: 10px,0;
				}
				button{
					margin:10px auto;
					display: block;
					height: 30px;
					width: 50%;
					background-color:yellowgreen;
					color: white;
					border: none;
					border-radius: 15px;
					outline: none;

				}
			}
		}

	}

</style>