/*
* @Author: duqinzhi
* @Date:   2018-05-06 16:16:17
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-06 18:37:18
*/
/**面试：如何更改this指向
 * 	1.call apply  bind
 * 	2.var that = this
 * 	3.箭头函数
 */
/**箭头不具备this和arguments，自己家没有this就找上一级this
 * 1.如何确定this是谁：看前面谁调用的（.前面实时this就是谁）
 */


function a(b){
 	return b+1;
 }
 let b1 = b=>{return b+1;};   //去掉function关键字，参数有一个可以省略() ,没有大括号则直接是返回值，有大括号必须写return


 /*
 	function fn(b){
		return function (c){
			return b+c;
		}
 	}
  */
 let fn = b=> c=> b+c;;   //两箭头以上的叫高阶函数
 console.log(fn(1)(2));

//闭包：函数执行的一瞬间叫闭包（不销毁的作用域），
//	  当执行后返回的结果必须是引用数据类型，被外界变量接收 此时这个函数不会销毁