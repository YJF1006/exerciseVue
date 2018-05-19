/*
* @Author: duqinzhi
* @Date:   2018-05-19 17:38:27
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-19 18:19:10
*/

/* vuex 平级组件的交互，
 1. 原来的做法：
	 1. 找共同的父级解决
	 2. 跨组件交互
	 3. eventBus 混乱（原理 发布订阅 on emit）
 2. vuex 主要借鉴于了 (flux redux), vuex只能在vue中使用（单独为vue开发的）
 3. vuex为了大型项目，主要是（状态）管理，将数据统一管理
 4. 在控制台上switch vuex 可以看到vuex上的数据
 5. vuex的规定在组件中不能直接去操作状态
 6. vuex的数据是单向数据流
 */
import Vue from 'vue';
import Vuex from 'vuex';  //引入 vuex
import logger from 'vuex/dist/logger';   //1.引入vuex里面的logger插件(查看日志)
Vue.use(Vuex);  //使用Vuex插件

//容器是唯一的
const state = {count:0};   //状态(一般不要用let,因为let会被更改，const定义的常量，不能被修改)
//计算属性
const getters = {
	val:state=>state.count%2?'奇数':'偶数'
};
//更改状态(管理员)、
import mutations from './mutations.js';

//导出Vue的store   
export default new Vuex.Store({
	state, //把state(状态)放进容器里面  (相当于state:state 名字一样写一个)
	getters,
	mutations,  //把mutations(管理员)放进容器里
	strict:true,
	plugins:[logger()],    //2.日志插件(只要一有更改，控制台会自动打印出来)

});


/* strict:true   配置严格模式，表示只能通过mutation(管理员)更改状态
	  1. 要是没有通过mutation更改，而是直接在组件操作状态，那么控制台vuex是监控不到的,在严格模式下回报错)
	  2. mutation 不支持异步
*/

/*state 相当于 data
  mutations 相当于方法
  getters  相当于computed 计算属性

 */
