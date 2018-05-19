/*
* @Author: duqinzhi
* @Date:   2018-05-19 15:31:01
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-19 17:42:17
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
import App from './App.vue';
import store from './store/index.js'

//计数器
new Vue({
	el:'#app',
	render:h=>h(App),
	//(store被注册到实例上了，所有组件都会有一个属性this.$store ,所有的组件都可以获得状态里面的东西this.$store.state)
	store:store,   //把容器放进Vue实例上
	

})

/* strict:true   配置严格模式，表示只能通过mutation(管理员)更改状态
	  1. 要是没有通过mutation更改，而是直接在组件操作状态，那么控制台vuex是监控不到的,在严格模式下回报错)
	  2. mutation 不支持异步
*/
