<template>
	<div>
		<Header>购物车</Header>
		<ul class="content">
			<div class="list">
				<li v-for ='list in cartList'>
					<img :src="list.bookCover" >
					<button @click='decrease(list)'>-</button>	{{list.bookCount}} <button @click='increase(list)'>+</button>
					<p>小计: {{list.bookCount*list.bookprice}}</p>
					<button>删除</button>	
				</li>
			</div>

			<p>共本{{count}}书</p>		 				
		</ul>
	</div>
</template>
<script>
	import Header from '../base/Header.vue';
	import {changeCount} from '../store/mutations.js'
	//辅助函数
	import {mapState,mapGetters} from 'vuex';
	//console.log(mapState(['cartList']));   mapState(['cartList']) 返回的是一个对象，要把他展开
	export default {
		data(){
			return {}
		},
		methods:{
			//更改商品数量 增加
			increase(book){//给管理员对应的方法提交
				this.$store.commit('changeCount',{book:book,flag:1});  // changeCount函数 参数(id,1/-1)  
			},
			decrease(book){//给管理员对应的方法提交
				this.$store.commit('changeCount',{book:book,flag:-1});  // changeCount函数 参数(id,1/-1)  
			}
		},
		computed:{
			...mapState(['cartList']),
			...mapGetters(['count']),
			/*辅助函数等价于
			cartList(){
				return  this.$store.state.cartList;
			} 
			count(){
				return  this.$store.getters.count;
			} 
			（只不过辅助函数返回的是个对象,需要...展开）mapState(['cartList']) 
			*/

		},
		components:{
			Header,
		}
	}
</script>
<style scoped lang='less'>
/* 加了scoped说明这个样式只能在此作用域 */
	.list{
		display: ;
		li{
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
