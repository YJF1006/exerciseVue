<template>
	<div>
		<Header >列表页</Header>
		<div class="content">	
				<ul>
					<!-- router-link是个可以跳转组件要加key属性，防止警告   router-link替代的是li  所有tag='li' -->
					<!-- 给路由起名，去到名字叫detail的路由，携带的参数是book.bookId -->
					<router-link  v-for='(book,index) in books' :key='index' :to='{name:"detail",params:{did:book.bookId}}'  tag='li'>
						<img :src="book.bookCover">
						<div>
							<h4>书名：{{book.bookName}}</h4>
							<p>内容：{{book.bookInfo}}</p>
							<b>￥：{{book.bookprice}}</b>
							<button @click.stop=remove(book.bookId)>删除</button>   <!-- .stop是为了防止冒泡 要不点击删除也会进入详情 -->
						</div>						
					</router-link>
				</ul>
		</div>
	</div>
</template>
<script>
	import Header from '../base/Header.vue';
	import {getAllBooks,removeBook} from '../api/index.js';

	export default {
		created(){
			//获取所有图书
			this.getBooks()
		},
		data(){
			return {
				books:[]
			}
		},
		methods:{
			//获取所有图书
			async getBooks(){
				this.books = await getAllBooks();//将执行返回的promise实例
			},
			async remove(id){
				await removeBook(id);  //删除某一项，删除完了后台，也要删除前台数据
				this.books.filter((item)=>item.bookId!==id);
			}
		},
		components:{
			Header
		}
	}
</script>
<style scoped lang='less'>
/* 加了scoped说明这个样式只能在此作用域 */
	.content{
		ul{
			padding: 10px;
			li{
				padding: 10px;
				display: flex;
				margin: 10px;
				border:1px dashed #ccc;
				h4{
					font-size: 20px;
					line-height: 35px;
				}
				p{
					color: #999;
					line-height: 25px;
				}
				b{
					color: red;
				}
				button{
					display: block;
					height: 20px;
					width: 60px;
					background-color:orangered;
					color: white;
					border: none;
					border-radius: 15px;
					outline: none;
				}
			}
		}
	}
</style>