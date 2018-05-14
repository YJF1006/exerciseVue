/*
* @Author: duqinzhi
* @Date:   2018-05-14 14:22:48
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-14 17:13:20
*/

//引js
	let str = require('./a.js');   //写的node代码就用require
	import xxx from './b.js';      //前端用import  后端用require
	console.log(str);
	console.log(xxx);

	let a= b=>c=>d=>b+c+d;
	let obj ={name:'dqz'};
	let obj1={age:18};

	let newObj = {...obj,...obj1};  //es7语法
	console.log(newObj);

//引css
 	import './index.css';  

 //引less
 	import './style.less';

//在Js中引入图片需要import,或者写一个线上路径
	 import page from './404.jpg'   //page就是图片的路径
	 let img = new Image();
	 //img.src = "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3533273899,4010966762&fm=27&gp=0.jpg";  //相当于写了一个字符串，webpack不会进行查找
	 img.src=page;
	 document.body.appendChild(img);