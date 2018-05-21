import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
/*这样引入都会被打包进去，组件全部打到一起去，霍城动态的写*/
// import Home from '../components/Home.vue';
// import List from '../components/List.vue';
// import Add from '../components/Add.vue';
// import Collect from '../components/Collect.vue';
// import Detail from '../components/Detail.vue';


export default new Router({  //默认是没有模式的，有模式的是哈希的
  // mode:'history',

  routes: [
  	{
  		path:'/home',
  		component:()=>import('../components/Home.vue'),
  		meta:{keepAlive:true,title:'首页'}
      },   //缓存

  	{
  		path:'/list',
  		component:()=>import('../components/List.vue'),
      meta:{keepAlive:true,title:'列表'}
  	},
  	{
  		path:'/add',
  		component:()=>import('../components/Add.vue'),
      meta:{keepAlive:true,title:'添加'}
  	},
  	{
  		path:'/collect',
  		component:()=>import('../components/Collect.vue'),
      meta:{keepAlive:true,title:'购物车'}
  	},
  		//   /detail/1  {Did:1}  路径参数必须有，但是可以随机
  	{
  		path:'/detail/:did',
  		component:()=>import('../components/Detail.vue'),
      meta:{title:'详情'},
  		name:'detail',   //路径参数
  	},
  	{
  		path:'*',
  		redirect:"/home"
  	}   //乱输入的时候，重定向到home
  ]
})
