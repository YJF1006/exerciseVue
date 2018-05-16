/*
* @Author: duqinzhi
* @Date:   2018-05-15 20:46:33
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-16 11:11:57
*/

//自己写的弹框的插件

import modal from './notify.vue';
let notify = { //需要在此对象上拥有一个install方法

};
//理想中的用法  this.$notify('你好啊',{delay:1000})

notify.install = function(Vue,options={delay:3000}){
	Vue.say =function(){
		alert('我是插件上的方法  ');
	}
	//options use函数传进来的第二个参数对象
	Vue.prototype.$notify= function(message,opt={}){  //不传默认是空的
		if(document.$el){   //如果有notify(即已经点过一次了  就直接返回，防止多次点击)
			return;
		}
		options ={...options,...opt};  //用自己调用插件时传递过来的属性覆盖掉默认设置好的
		let V = Vue.extend(modal);  //返回的是一个构造函数的子类，参数是包含组件选项的对象
		let vm = new V;
		vm.msg = message;  //通过外面改掉里面的
		let oDiv = document.createElement('div');  //创建一个div
		vm.$mount(oDiv);   //将实例挂在上元素上 用$el 替换掉div
		document.body.appendChild(vm.$el);  //把实例的这个真实对象放进body里面
		notify.el=vm.$el;  //把vm.$el存起来，在上面判断，防止多次点击出来多个（在上面判断notify.el是否存在即可） 
		setTimeout(()=>{  //延迟多少秒将dom移除
			document.body.removeChild(notify.el);  //将实例上的元素删除掉   vm.$el(在上面已经被notify.el替换了) 可以获得实例上的dom元素
		},options.delay);

	}
};
//导出这个包含install方法的对象，如果使用Vue.use 就会调用这个install方法
export default notify;