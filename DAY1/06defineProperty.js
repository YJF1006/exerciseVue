/*
* @Author: duqinzhi
* @Date:   2018-05-06 20:42:49
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-06 21:00:38
*/

/**vue实现双向绑定的原理
	1. 基础：利用Object.defineProperty() 里面的get和set方法
	2. 具体的小案例看07双向绑定的小案例
 */
let obj = {};
let temp = {}
Object.defineProperty(obj,'name',{
	get(){   //取obj的name属性会触发
		return temp['name']
	},
	set(val){//设置obj的name属性会触发
		// obj.name = val;  //一设置就会调用set又设置 ，然后进入死循环  ,采用中间的temp做变量转换的
		temp['name'] = val;
	} 
});