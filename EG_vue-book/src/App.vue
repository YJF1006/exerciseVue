<template>
  <div id="app">
  	<router-view></router-view>	
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

</style>
