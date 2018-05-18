import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Add from '../components/Add.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';


export default new Router({
  routes: [
  	{path:'/home',component:Home,meta:{keepAlive:true}},
  	{path:'/list',component:List},
  	{path:'/add',component:Add},
  	{path:'/collect',component:Collect},
  	//   /detail/1  {Did:1}  路径参数必须有，但是可以随机
  	{path:'/detail/:did',component:Detail,name:'detail'},
  	{path:'/',redirect:"/home"}   //乱输入的时候，重定向到home
  ]
})
