/*
* @Author: duqinzhi
* @Date:   2018-05-19 17:42:46
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-19 18:17:53
*/
import * as Types from './mutations-type.js';
const mutations = { //更改状态的(管理员)
//加
	[Types.INCREASE](state,count){   
	//参数1(是固定的)：state是自动放进去的，默认指的是当前的state
	//参数2：载荷
		state.count += count; 
	},
//减
	[Types.DECREASE](state,count){
		state.count -= count;
	}
}; 

export default mutations;  //导出

//对象里面属性要是变量的时候，用[]把属性包裹起来