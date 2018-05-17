<template>
	<div>
		<Header :back='true' >列表页</Header>
		<div class="content">	
				<ul>
					<li v-for='(book,index) in books' :key='index'>
						<img :src="book.bookCover">
						<div>
							<h4>书名：{{book.bookName}}</h4>
							<p>内容：{{book.bookInfo}}</p>
							<b>￥：{{book.bookprice}}</b>
							<button>删除</button>
						</div>
						
					</li>
				</ul>
		</div>
	</div>
</template>
<script>
	import Header from '../base/Header.vue';
	import {getAllBooks} from '../api/index.js'
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