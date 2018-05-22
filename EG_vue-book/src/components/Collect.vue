<template>
	<div>
		<Header>购物车</Header>
		<ul class="content">
			<div class="list">
				<li v-for ='list in cartList'>
					<img :src="list.bookCover" >
					<button @click='decrease(list)'>-</button>	{{list.bookCount}} <button @click='increase(list)'>+</button>
					<!-- 过滤器 原数据不变的情况，只是改变显示效果  | 管道符 -->
					<p>小计: {{list.bookCount*list.bookprice | toFixed(2) }}</p>
					<button @click='remove(list)' class='special'>删除</button>	
				</li>
			</div>
			<div class="footer">
				<div class="price">总价:{{allPrice | toFixed(2) }}</div>
				<p>总共: {{count}}本书</p>	<button @click='clear' class='special'>清空购物车</button>
			</div>			 				
		</ul>
	</div>
</template>
<script>
	import Header from '../base/Header.vue';
	import {changeCount,removeCart,clearCart} from '../store/mutations.js'
	//辅助函数
	import {mapState,mapGetters} from 'vuex';
	//console.log(mapState(['cartList']));   mapState(['cartList']) 返回的是一个对象，要把他展开
	export default {
		data(){
			return {}
		},
		//放过滤器的对象
		filters:{  
			toFixed(input,param1){   //input是管道的输入符里面的内容  
				return input.toFixed(param1);   //toFixed() 是取几位小数的函数
			}
		},
		methods:{
			//更改商品数量 增加
			increase(book){//给管理员对应的方法提交
				this.$store.commit('changeCount',{book:book,flag:1});  // changeCount函数 参数(id,1/-1)  
			},
			//更改商品数量 减少
			decrease(book){//给管理员对应的方法提交
				this.$store.commit('changeCount',{book:book,flag:-1});  // changeCount函数 参数(id,1/-1)  
			},
			//删除商品
			remove(book){
				console.log(book);
				this.$store.commit('removeCart',book);  //removeCart函数 参数是(id)
			},
			clear(){
				this.$store.commit('clearCart');   //clearCart函数，直接清空了，不需要传递任何参数
			}
		},
		computed:{
			/* 辅助函数的写法 等价于下面的  但是因为要localStorage所以用了下面
				...mapState(['cartList']),
				...mapGetters(['count','allPrice']),
				只不过辅助函数返回的是个对象,需要...展开）mapState(['cartList'])
			 */
			cartList(){
				// return  this.$store.state.cartList;   这是没有加localStorage之前的写法
				let data= window.localStorage.getItem('cartList');   //获取local的缓存的数据
				let localData = JSON.parse(data);
				console.log(localData,data);
				if(this.$store.state.cartList.length == 0 && localData){  //因为刷新了之后数据会变成0，所以如果刷新了并且本地有缓存，那么就把本地的数据再次提交给对应的mutations函数上去
					console.log('进来了');
					this.$store.commit('updateAddCart',localData);	//同步操作
				}
				return  this.$store.state.cartList;  
			},
			count(){
				return  this.$store.getters.count;
			}, 
			allPrice(){
				return this.$store.getters.allPrice;
			}
			
			

		},
		components:{
			Header,
		}
	}
</script>
<style scoped lang='less'>
/* 加了scoped说明这个样式只能在此作用域 */
		ul{
			padding: 5px;
			.list{
				margin-bottom: 10px;
				li{
					margin-top: 3px;
					border-bottom: 1px dashed #ccc;
					display: flex;
					align-items: center;
					margin: 1px 2px;
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
					button:not(.special){    /*button 里面除了.special 之外使用的样式 即计数器的button样式*/
						background-color:#ccc;
						height: 20px;
						width: 30px;
						margin: 2px;
					}
					.special{
						position: fixed;
						right: 10px;
					}
				}
			}
			.footer{
				width: 100%;
				p{
					height: 30px;
					float: left;
					overflow: hidden;
					line-height: 30px;

				}
				button{
						display: block;
						height: 30px;
						width: 100px;
						background-color:orangered;
						color: white;
						border: none;
						border-radius: 15px;
						outline: none;
						float: right;
						overflow: hidden;
						margin-right: 20px;
					}
			}

		}
</style>
