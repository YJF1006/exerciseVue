/*
* @Author: duqinzhi
* @Date:   2018-05-20 10:23:59
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-20 11:52:52
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
