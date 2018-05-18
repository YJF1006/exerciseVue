<template>
	<div>
		<Header :back='true'>添加</Header>
		<div class="content">
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
				<li>
					<label for="bookCover">书的封面</label>
					<input type="text" v-model='book.bookCover'  id='bookCover'>
				</li>
				<li><button @click='add'>添加</button></li>
			</ul>
		</div>
	</div>
</template>
<script>
	import Header from '../base/Header.vue';
	import {addBook} from '../api/index.js';
	export default {
		data(){
			return {
				book:{}
			}
		},
		methods:{
			async add(){
				await addBook(this.book);
				this.$router.push('/home');
			}

		},
		computed:{},
		components:{
			Header
		}
	}
</script>
<style scoped lang='less'>
/* 加了scoped说明这个样式只能在此作用域 */
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