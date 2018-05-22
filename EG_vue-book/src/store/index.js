/*
* @Author: duqinzhi
* @Date:   2018-05-20 10:23:59
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-22 14:48:13
*/
import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';  //日志
Vue.use(Vuex);  //使用插件


const state = {cartList:[]};//状态
import mutations from './mutations.js';  //管理员
import getters from './getters.js';   //计算属性

export default new Vuex.Store({
	state,
	mutations,
	getters,
	strict:true,   //严格模式
	plugins:[logger()],   //注册插件
});

/* strict:true   配置严格模式，表示只能通过mutation(管理员)更改状态
	  1. 要是没有通过mutation更改，而是直接在组件操作状态，那么控制台vuex是监控不到的,在严格模式下回报错)
	  2. mutation 不支持异步
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

