/*
* @Author: duqinzhi
* @Date:   2018-05-16 21:00:15
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-17 18:10:16
*/

 //轮播图的接口，用axios发请求给服务器返回来一个Promise实例(可以用then方法)

import axios from 'axios';
axios.defaults.baseURL= 'http://localhost:1006';   //增加默认的请求路径(axios.defaults.baseURL)

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
	return axios.delete();
}
