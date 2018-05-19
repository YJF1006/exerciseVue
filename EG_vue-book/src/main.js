// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);//使用轮播图插件
import 'swiper/dist/css/swiper.css'   //swiper的css样式

//图片懒加载
import VueLazyLoad from 'vue-lazyload';
Vue.use( VueLazyLoad,{
	preload:1.3,
	error:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1496834666,295290399&fm=200&gp=0.jpg',
	loading:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526701448001&di=b73d1ec9fb8fabe628317510ec42916a&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fadaf2edda3cc7cd9f4f6fbc33f01213fb90e91d5.jpg',
	attempt:1
});

/*
title随着页面不同而不同
在进入路由之前每一次都会执行此方法 全局钩子*/
router.beforeEach(function(to,from,next){
	//to:到哪去  from:从哪来   next:继续下一个路由
	// console.log(to);
	document.title = to.meta.title;	
	next()
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
