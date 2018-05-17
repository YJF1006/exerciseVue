/*
* @Author: duqinzhi
* @Date:   2018-05-16 19:45:46
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-17 18:08:20
*/
let http =require('http');
let fs = require('fs');
let url = require('url');


// 获取轮播图 /sliders
let sliders = require('./sliders.js')



//搭建服务
http.createServer((req,res)=>{
	//跨域头
	  res.setHeader('Access-Control-Allow-Origin', '*');
	  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	  if (req.method == 'OPTIONS') {
	    return res.end(); /*让options请求快速返回*/
	  }

	let{pathname,query} = url.parse(req.url,true);  //吧把query转化成对象


//轮播图
	if(pathname === '/sliders'){
		res.setHeader("Content-Type", "application/json;charset=utf-8");
		return res.end(JSON.stringify(sliders));
	};
//热门图书
	if(pathname === "/hotbook"){
		//读取书的信息
		getBook(function(books){   //后面有6个数据假设现在只要5个(最后增加的要放在最前面，所以先倒序再截取)
			let hotBook = books.reverse().slice(0,6);  //包前不包后 现在是个数组
			res.setHeader("Content-Type", "application/json;charset=utf-8");
			res.end(JSON.stringify(hotBook));  //json形式返回个前端
		});
		return 
	}
//对书的增删改查
	if(pathname === '/book'){  
		let id = parseInt(query.id);  //取出来的字符串转化成数字
		switch (req.method) {
			case 'GET':
				if(id){  //查询一个


				}else{ //获取所有的图书
					getBook(function(books){
						res.setHeader('Content-type',"application/json;charset=utf-8");
						res.end(JSON.stringify(books.reverse()));   //将取出来的转化成字符串传给前端
					})
				};
				break;
			case 'POST':
				break;
			case 'PUT':
				break;
			case 'DELETE':
				break;

		};
		return 
	}


}).listen(1006)


//封装的一个读取书的方法
function getBook(callback){
	fs.readFile('./book.json','utf8',function(err,result){
		if(err || result.length == 0){
			callback([]);   //如果有错误后者文件没有长度就传一个空数组
		}
		callback(JSON.parse(result));  //将读出来的内容转化成对象
	});
}

