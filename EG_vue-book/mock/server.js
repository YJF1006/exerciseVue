/*
* @Author: duqinzhi
* @Date:   2018-05-16 19:45:46
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-16 21:30:25
*/
let http =require('http');
let fs = require('fs');
let url = require('url');


// 获取轮播图 /sliders
let sliders = require('./sliders.js')
http.createServer((req,res)=>{
	//跨域头
	  res.setHeader('Access-Control-Allow-Origin', '*');
	  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	  if (req.method == 'OPTIONS') {
	    return res.end(); /*让options请求快速返回*/
	  }

	let{pathname,query} = url.parse(req.url);
	if(pathname === '/sliders'){
		res.setHeader("Content-Type", "application/json;charset=utf-8");
		res.end(JSON.stringify(sliders));
	}
}).listen(1006)

