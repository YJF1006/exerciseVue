<template>
  <div id="app">
 <!-- 增添动画 -->
 <transition name='fadeIn'>
 	 <!-- 需要缓存的内容  -->
  	<keep-alive>
  		<router-view v-if='$route.meta.keepAlive'></router-view>	
  	</keep-alive>
 </transition>
 <transition name='fadeIn'>
 	<!-- 正常的访问 不需要缓存的走这 -->
	<router-view v-if='!$route.meta.keepAlive'></router-view>	
 </transition>
 	
	<Tab></Tab>	
  </div>
</template>

<script>
	import Tab from './base/Tab.vue';  //引入Tab基本组件
	export default {
	  name: 'App',
	  components:{
	  	Tab
	  }
	}
</script>

<style>
	/* 这里可以写公共的样式  都会用到 */
	*{margin: 0;padding: 0;}
	ul,li {list-style: none;}
	a{text-decoration:none;}
	input,button{
		-webkit-appearance: nome;/* 文本框的渲染样式 */
	}
	.content{  /* 中间的的盒子 */
		position: fixed;
		width: 100%;
		top:40px;
		bottom: 50px;
		overflow: auto;  /* 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 */
	}

	/* 动画的效果 */
	.fadeIn-enter{  /* 进入之前 */
		opacity: 0;
	}
	.fadeIn-enter-active{
		transition: all 0.3s linear;

	}
	.fadeIn-leave-active{
		transition: all 0.3s linear;
		opacity: 0;
	}
</style>
