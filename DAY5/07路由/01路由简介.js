/*
* @Author: duqinzhi
* @Date:   2018-05-13 17:21:02
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-13 17:58:45
*/

/**路由  访问不同的路径，就可以返回不同的结果
	1. 单页面web应用（spa）
	2. vue-router  基于vue的一个库，可以配置组件和路由映射，vue+vue-router 创建单页面应用
	3.vue-router 必须放在vue的后面  因为他是基于vue的
 */

/*前后端分离，后端只负责提供接口供前端调用，像跳转都是前端自己处理的
	1. hash模式 #   开发时使用hash,    不支持seo
	2. h5的history.pushState  上线的时候用这个(因为hash不会被搜索引擎搜索到的)
		history.pushState('','','/路径')    页面不会刷新    回车会真实的去访问

 */
