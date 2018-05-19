/*
* @Author: duqinzhi
* @Date:   2018-05-16 21:00:15
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-19 10:42:38
*/

 //轮播图的接口，用axios发请求给服务器返回来一个Promise实例(可以用then方法)

import axios from 'axios';


//拦截器
axios.interceptors.response.use((res)=>{//通过响应拦截器统一拦截结果，把结果处理成res.data
	return res.data;   //这样前端就不用使用对象解构获得数据
});


//获取轮播图数据，返回的是一个Promise实例
export let getSliders = ()=> {
	return axios.get('/sliders')   //返回的是Promise实例 有then方法
};

//获取热门图书的接口，返回的是一个Promise实例
export let getHotBook = ()=>{
	return axios.get('/hotbook');
};

//获取全部的图书
export let getAllBooks = ()=>{
	return axios.get('/book');
};

//删除某一本图书
export let removeBook = (id)=>{
	return axios.delete(`/book?id=${id}`);  //模板字符串
};

//获取某一本书
export let findOne =(id)=>{
	return axios.get(`/book?id=${id}`);
};

//修改图书
export let updateBook = (id,data)=>{
	return axios.put(`/book?id=${id}`,data);
};

//添加图书
export let addBook = (data)=>{
	return axios.post('/book',data);
}

//获取全部（将首页的轮播图和热门图书放在一起）
export let getAll = ()=>{
	//.all里面的参数是一个数组，数组里面放的是其他的函数返回结果，当这些返回结果都返回了，getAll才会返回
	return axios.all([getSliders(),getHotBook()]);
};

//分页(列表页中)  根据偏移量返回对应的数据 
export let pagination = (offset) =>{
    return axios.get(`/page?offset=$(offset)`);

};