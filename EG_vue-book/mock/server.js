/*
* @Author: duqinzhi
* @Date:   2018-05-16 19:45:46
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-19 18:29:26
*/
let http =require('http');
let fs = require('fs');
let url = require('url');
let path = require('path');


// 获取轮播图 /sliders
let sliders = require('./sliders.js')

//搭建服务
http.createServer((req,res)=>{
	let{pathname,query} = url.parse(req.url,true);  //把query转化成对象

	res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
      return res.end(); /*让options请求快速返回*/
 	}


//懒加载
	if(pathname ==='/page'){
		let result,hasMore;
		getBook(function(books){
			let pageSize = 5;  //每页的显示个数自定义为5个
			let offset = parseInt(query.offset) || 0;   //把offset转成数字  拿到当前前端传递的值
			result = books.reverse().slice(offset,offset+pageSize); 
			hasMore = true;   //默认有更多 
			if(books.length<=offset+pageSize){  //已经显示的数目，大于总共的条数
				hasMore =false;
			}
			res.setHeader("Content-Type", "application/json;charset=utf-8");
		   res.end(JSON.stringify({hasMore:hasMore,books:result}));

		});
		return
	}
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
				if(!isNaN(id)){  //查询一个
					getBook(function(books){
						let book = books.find(item=>item.bookId === id);
						if(!book){  //如果没找到则是undefined返回空对象
							book ={};
						}
						res.setHeader('Content-type','application/json;cahrset=utf-8');
						res.end(JSON.stringify(book));
					});
				}else{ //获取所有的图书
					getBook(function(books){
						res.setHeader('Content-type',"application/json;charset=utf-8");
						res.end(JSON.stringify(books.reverse()));   //将取出来的转化成字符串传给前端
					})
				};
				break;
			case 'POST':
				let str = '';
				req.on('data',function(chunk){
					str += chunk;
				});
				req.on('end',function(){
					let book = JSON.parse(str);
					getBook(function(books){
						book.bookId = books.length?books.length : 1; //添加id
						console.log(book);
						books.push(book);  //将数据放到books中，book在内存中
						
						write(books,function(){
							res.end(JSON.stringify(books));
						});

					})
				})
				break;
			case 'PUT':
				if(id){//获取了当前要修改的id
					let str ='';
					req.on('data',chunk=>{
						str += chunk;
					});
					req.on('end',()=>{
						let book = JSON.parse(str);   //book要改成什么样
						getBook(function(books){
							book = books.map(item=>{   //迎神
								if(item.bookId === id){  //找到id相同的哪一本书，用新的代替旧的，其他的不等的就直接原封不动return回去就行
									return book;
								}
								return item
							});	
							write(book,function(){  //把新的写入到book.json里面
								res.end(JSON.stringify(book));
							})

						});
					});
				}
				break;
			case 'DELETE':
				//通过getBook()获取到所有的书，然后过滤掉相等的id的
				getBook(function(books){
					books = books.filter(item=>item.bookId !== id);
					write(books,function(){
						res.end(JSON.stringify({}));  //删除返回空对象
					});
				});
				break;

		};
		return 
	}


fs.stat('.'+pathname,function(err,stats){
	if(err){  //如果错误的话，就返回到首页，到首页了会再次判断
		fs.createReadStream('index.html').pipe(res);
	}else{
		if(stats.isDirectory()){
			let p = path.join('.'+pathname,'index.html');
			fs.createReadStream(p).pipe(res);
		}else{
			fs.createReadStream('.'+pathname).pipe(res);
		}

	}
});



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
//封装一个把修改的数据返回写入book.json(充当数据库)
function write(data,callback){
	fs.writeFile('./book.json',JSON.stringify(data),callback);
}

