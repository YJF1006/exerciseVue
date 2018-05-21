/*
* @Author: duqinzhi
* @Date:   2018-05-20 10:47:20
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-21 19:09:58
*/

/*加入购物车的功能
	1.添加购物车  addCart   (添加的商品）
	2.删除购物车  REMOVE_CART   （要求传入id）
	3.更改商品数量  changeCount   （id,1/-1）
	4.清空购物车   CLEAR_CART
*/
import * as Types from './mutations-type.js';
const mutations = {
	//加入购物车
	addCart(state,book){
		//book是添加的一本书，如果有这本书累加的是数量，如果没有数量为1，放到cartList
		let product = state.cartList.find(item=>item.bookId === book.bookId);   //用find判断是否有这本书
		if(product){
			product.bookCount += 1; //加了数量之后，还要更新原数组，否则不会刷新
			state.cartList = [...state.cartList];   // 更新原数组
		}else{
			book.bookCount = 1;  //如果没有的话数量改为1 ，
			//用新数组替换掉老数组
			state.cartList = [...state.cartList,book];  //没有  就添加到cartList中
		}
	},
	//更改商品
	changeCount(state,params){
		let book = params.book;
		let flag = params.flag;
		let product = state.cartList.find(item=>item.bookId === book.bookId);  //找到bookId为id的那本书
		// flag===1?book.bookCount += 1:book.bookCount += 1;
		if(flag === 1){  //增
			console.log('jia ');
			product.bookCount += 1;   //给他的数量+1
		}else if(flag === -1){  //减
			if(product.bookCount >0 ){
				product.bookCount -= 1;   //给他的数量-1
			}else{
				product.bookCount  = 0;
			}
		}
		state.cartList = [...state.cartList];   //更新原数组，否则不会刷新
	},
	
	
};

export default mutations;