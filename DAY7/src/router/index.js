/*
* @Author: duqinzhi
* @Date:   2018-05-15 20:31:09
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-15 20:40:32
*/
//专门维护路由的文件

//1. 引vue 和vue-router(使用use)
import Vue from 'vue';
import VueRouter from 'vue-router';
//和以前不一样的地方引入router必须使用use  他的功能就是注册一些全局内容  vue的插件
Vue.use(VueRouter);   

//2. 引路由文件
import Home from '../components/Home.vue';
import List from '../components/List.vue';

//3. 配置路由
export default new VueRouter({   //默认导出
	routes:[
		{path:'/home',component:Home},
		{path:'/List',component:List}
	]
});
