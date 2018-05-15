/*
* @Author: duqinzhi
* @Date:   2018-05-15 08:56:41
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-15 20:54:36
*/

import Vue from 'vue';   //引的是runtime   不支持template，只支持render 
						//要是引的'vue/dist/vue.js'  则支持compiler + runtime

import App from './App.vue';
import router from './router/index.js';
import notify from './plugin/notify.js';  //引入自己写的插件
Vue.use(notify,{  //使用带有install的对象
	delay:2000
});  

new Vue({
	router,
	el:'#app',
	render:h=>h(App)
});