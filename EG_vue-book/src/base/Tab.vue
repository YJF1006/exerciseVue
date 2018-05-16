<template>
	<div class='footer'>
		<router-link to='/home'>
			<i class='iconfont icon-shouye'></i>
			<span>首页</span>
		</router-link>
	  	<router-link to='/list'>
	  		<i class='iconfont icon-liebiaoyemian'></i>
	  		<span>列表</span>
	  	</router-link>
	  	<router-link to='/add'>
	  		<i class='iconfont icon-tianjiayemian'></i>
	  		<span>添加</span>
	 	</router-link>
	  	<router-link to='/collect'>
	  		<i class='iconfont icon-shoucang'></i>
	  		<span>收藏</span>
	  	</router-link>
	</div>
</template>
<!-- 下面四个要等分，一般常用的方法
	1. 伸缩布局
		display:flex;
		flex-direction:row/column
		justify-content: center;   主轴居中
		align-items: center;   侧抽居中
		flex:1   //每份占1
	2.激活样式
	  router-link-exact-active    确切激活样式  比较严格
	  router-link-active   激活样式
 -->
<style scoped lang='less'>
/* 加了scoped说明这个样式只能在此作用域   lang='less'  说明用less写的 */
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
		display: flex;
		border:1px solid ccc;
		a{
			display: flex;
			flex-direction: column;
			flex:1;
			align-items: center;
			justify-content: center;  /* 内容居中 */
			color: yellowgreen;
		}
		a.router-link-active{
			color: yellow;
		}
	}

</style>