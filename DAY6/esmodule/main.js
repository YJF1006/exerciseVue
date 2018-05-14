/*
* @Author: duqinzhi
* @Date:   2018-05-14 10:22:07
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-14 10:51:14
*/

/* 
1. 如果是第三方模块 ，不需要加./    如果是文件模块，需要加./
2. import 拥有声明功能，可以预解析，但一般开发的时候import放在顶部
3. 引入的时候 方法一：  解构  import {str,str2,a} from './a.js'
			  方法二    * as  import * as b  from './a.js'   //将所有东西装进b对象里面
*/

//在另一个文件中将内容解构出来即可使用

/*

 */
//import {str,str2,a} from './a.js';

import * as a  from './a.js';
import b from './b.js'
console.log(a.str,a.str2);
a.aa()
console.log(b);