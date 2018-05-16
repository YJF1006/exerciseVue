/*
* @Author: duqinzhi
* @Date:   2018-05-16 21:00:15
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-16 21:42:18
*/

 //轮播图的接口，用axios发请求给服务器返回来一个Promise实例(可以用then方法)

import axios from 'axios';
axios.defaults.baseURL= 'http://localhost:1006';   //增加默认的请求路径(axios.defaults.baseURL)

//获取轮播图数据，返回的是一个Promise实例
export let getSliders = ()=> {
	return axios.get('/sliders')   //返回的是Promise实例 有then方法
}