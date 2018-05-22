/*
* @Author: duqinzhi
* @Date:   2018-05-20 10:47:20
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-22 18:02:06
*/

/*加入购物车的功能
	1.添加购物车  addCart   (添加的商品）
	2.删除购物车  REMOVE_CART   （要求传入id）
	3.更改商品数量  changeCount   （id,1/-1）
	4.清空购物车   CLEAR_CART
*/

/*网站刷新之后Vuex数据消失是不可避免的，但是要保存数据就把数据存到localStorage
	1. mutations里面   window.localStorage.setItem('key', value);  
	2. 计算属性中引用store中的状态并在其改变的时候更新localStorage中的数据。（localStoage 获取的是字符串，需要改变格式）
		computed: {  
      //cartCount() {  
      //	return this.$store.state.cartCount  
      //}
      cartCount() {  
        let localData = window.localStorage.getItem('cartCount')  
        if(this.$store.state.cartCount===0&&localData){  
          this.$store.commit('updateCartCount',localData)//同步操作  
        }  
        return this.$store.state.cartCount  
      }  
    }  
*/
import * as Types from './mutations-type.js';
const mutations = {
	//加入购物车(state是)
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
		let val =JSON.stringify(state.cartList)
		window.localStorage.setItem('cartList',val);   //将数据存到localStorage里面，防止页面刷新不见
	},
	updateAddCart(state,newData) {    //
    	state.cartList = [...newData]; 
    	let val =JSON.stringify(state.cartList);
    	window.localStorage.setItem('cartList',val);  
  }, 
	//更改商品
	changeCount(state,params){
		let book = params.book;
		let flag = params.flag;
		let product = state.cartList.find(item=>item.bookId === book.bookId);  //找到bookId为id的那本书
		// flag===1?book.bookCount += 1:book.bookCount += 1;
		if(flag === 1){  //增
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
	//删除购物车
	removeCart(state,book){
		let id = book.bookId;
		let newCartList = state.cartList.filter(item=>item.bookId!=id);   //没有bookId为id的书的新集合
		state.cartList = [...newCartList];//把这个新集合放进cartList原数组里面，更新数组，否则不会刷新		
	},
	//清空购物车
	clearCart(state){
		state.cartList = [];   //购物车列表清空
	}
	
	
};

export default mutations;
/*mutations 里面的所有函数的第一个参数必须是state

 */