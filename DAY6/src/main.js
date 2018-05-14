/*
* @Author: duqinzhi
* @Date:   2018-05-14 18:14:37
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-14 21:07:14
*/

// import App from'./App.vue';
// console.log(App);
// import Vue from 'vue/dist/vue.js'; 
//  //这样直接引用vue 引用的并不是vue.js 引用的是vue的runtime
//  //vue = compiler + runtime (compiler可以编译模板)
//  //compiler 有6k 要是引vue/dist/vue.js
 
//  new Vue({
//  	//render 函数的作用时间量虚拟dom渲染成真实的dom   createElement返回的是虚拟的dom
//  	render:(h)=>h(App)
//  }).$mount('#app');


import Vue from 'vue';
// 这样直接引用vue 引用的并不是vue.js 引用的是vue的runtime
// vue = compiler + runtime (compiler可以编译模板)
// compiler有6k
import App from './App.vue';
new Vue({
    // render函数的作用是将虚拟dom渲染成真实的dom
    // createElement返回的是虚拟的dom
    render:h=>h(App)
    // ...App
}).$mount('#app');


/*
render:function (createElement) {
    return createElement('h1',[
        'hello',
        createElement('span', '一则头条')
    ]);
}*/
