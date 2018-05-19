<template>
	<div>
		<Header >列表页</Header>
		<!-- 滚动的时候触发loadMore事件 -->
		<div class="content" ref='scroll' @scroll='loadMore' @>	
				<ul>
					<!-- router-link是个可以跳转组件要加key属性，防止警告   router-link替代的是li  所有tag='li' -->
					<!-- 给路由起名，去到名字叫detail的路由，携带的参数是book.bookId -->
					<router-link  v-for='(book,index) in books' :key='index' :to='{name:"detail",params:{did:book.bookId}}'  tag='li'>
						<img v-lazy="book.bookCover">
						<div>
							<h4>书名：{{book.bookName}}</h4>
							<p>内容：{{book.bookInfo}}</p>
							<b>￥：{{book.bookprice}}</b>
							<button @click.stop=remove(book.bookId)>删除</button>   <!-- .stop是为了防止冒泡 要不点击删除也会进入详情 -->
						</div>						
					</router-link>
				</ul>
				<button @click="more">加载更多</button>
		</div>
		
	</div>
</template>
<script>
	import Header from '../base/Header.vue';
	import {pagination,removeBook} from '../api/index.js';  //pagination  分页器，不用获取全部图书了 ，懒加载

	export default {
		created(){
			//获取所有图书
			this.getBooks()
		},
		data(){
			return {
				books:[],
				offset:0,  //代表的是偏移量
				hasMore:true,  //代表的是是否有更多 ，有更多了才请求(getbooks)获取数据
				isLoading:false //是否正在加载（默认是 不是正在加载）

			}
		},
		methods:{
			//获取所有图书
			async getBooks(){
					if(this.hasMore&&!this.isLoading){  //有更多的时候 并且正在加载 的时候没有获取数据
						this.isLoading = true;  //promise返回之前就一直正在加载
						let {hasMore,books} = await pagination(this.offset);
	             		this.books = [...this.books,...books]; // 获取的书放到books属性上
	             		this.hasMore = hasMore;
	             		this.offset = this.books.length; //维护偏移量 就是总书的长度
	             		this.isLoading = false;   //promise返回了之后，加载完毕（没有正在加载）
				}
			},
			async remove(id){
				await removeBook(id);  //删除某一项，删除完了后台，也要删除前台数据
				this.books.filter((item)=>item.bookId!==id);
			},
			more(){
				this.getBooks();  //点击加载更多  点击按钮触发获取数据函数
			},
			//加载更多
			loadMore(){   //滚动事件
				//scrollTop:卷去的高度  clientHeight:可视化高度  srollHeight：元素的内容总高度
				
				//进来的时候触发scroll事件，可能触发n次，先进来开一个定时器，下次触发的时候将上一次的定时器清除掉
				clearTimeout(this.timer)  //先清除定时器  防抖（节流）
				this.timer = setTimeout(()=>{
					let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll   //this.$refs.scoll   获取到dom元素
					if(scrollTop +clientHeight+32>scrollHeight ){  
						this.getBooks();   //触发获取更多（不用每次都自己点击加载更多按钮）实现懒加载
					}
				},13);
					
				

			}
		},
		// 下来刷新，这是js原生的，vue中也有各种插件，vue-pull-to-refresh (github上可以看)  
		mounted(){
			//原生js 
			let scroll = this.$refs.scroll  //获取到要拖拽的元素
			let top =scroll.offsetTop;   //拖拽元素距离顶部的偏移量
			let distance = 0; //默认移动的距离为0
			scroll.addEventListener('touchstart',(e)=>{
				if(scroll.scrollTop !=0 || scroll.style.offset != top){ //滚动条在最顶端的时候 或者当前盒子在顶端的时候才继续走，否则就直接return 
					return
				}
				let start = e.touches[0].pageY;     //手指点击的开始
				let move = (e)=>{
					let current = e.touches[0].pageY;
					distance = current - start;  //求得拉动的距离，负数就不要了
					if(distance>0){
						if(distance<=50){  //不能无限下拉  ，超出50px的时候就直接按50px处理
							scroll.style.top = top + distance +'px';
						}else{
							distance = 50;
							scroll.style.top =top +distance +"px";
						}	
					}else{  //移动的要是负的，就清除它的touchmove,touchend事件
						scroll.removeEventListener('touchmove',move);
						scroll.removeEventListener('touchend',end);
					}
				};
				//松手就回去
				let end = (e)=>{
					clearInterval(this.timer1);   //先清除定时器
					this.timer1 = setInterval(()=>{   //一共distance
						if(diatance <=0){
							clearInterval(this.timer1);  //回到原位了就清除定时器
							distance = 0;
							scroll .style.top =top + 'px';  //让盒子也回到顶端
							scroll.addEventListener('touchmove',move);  //清除定时器
							scroll.addEventListener('touchend',end);
							this.offset = 0;
							this.books = [];  //清空原有的书的数组 (清空数据)  
							this.getBooks();
							return;
						}
						distance -= 1;
						scroll.style.top =top + distance + 'px';
					}); 
				};
				scroll.addEventListener('touchmove',move);
				scroll.addEventListener('touchend',end);
			}); 
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
	
</style>