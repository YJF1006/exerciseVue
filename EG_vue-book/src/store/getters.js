/*
* @Author: duqinzhi
* @Date:   2018-05-20 11:48:26
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-22 16:21:03
*/
let getters ={   //类似于计算属性
	//算总共有多少本（求和，利用reduce）
	count:(state)=>state.cartList.reduce((prev,next)=>prev+next.bookCount,0),
	allPrice:(state)=>state.cartList.reduce((prev,next)=>prev + next.bookCount*next.bookprice,0),
};

export default getters;
