# DAY1 (https://github.com/YJF1006/exerciseVue/tree/master/DAY1)
> # 一：回顾以及准备所学知识
>>     易考面试题 
>>        1. for forEach  for in   for of 
>>              for : 编程式
>>              forEach : 不支持return
>>              for in : a. 遍历的时候key会变成字符串类型                            b. 数组的私有属性会被打印出来
>>              for of:  a. 遍历的时候key会是当时对应的类型（不再局限于只是字符串）    b. 支持return  
>>                   要想遍历对象 Object.keys()   将对象的key作为新的数组
>>        2.怎么改变this的指向
>>                a、apply call  bind
>>                b、重定义  let that = this
>>                c、箭头函数  箭头不具备this和arguments，自己家没有this就找上一级this（.前面实时this就是谁）

>>#### 1.操作数组的方法

>>          1.1 列举的是es4的：(pop  push  unshift  shift   splice reverse sort)  括号中的这些可以改变原数组，叫做数组的变异
        
>>          1.2 indexOf  lastIndexOf concat slice(不能改原数组)          

>>#### 2.其他的数组方法

>>          2.1 filter  过滤   （删除） 
>>                         是否操作数组：不；  
>>                         返回结果：过滤后的新数组； 
>>                         回调函数的返回结果：返回true，将这一项放到新数组中，返回false就不放新数组里面 

>>          2.2  map  映射（添加）
>>                         是否操作数组：不；  
>>                         返回结果：映射后的新数组； 
>>                         回调函数的返回结果：回调函数中返回什么，这一项就是什么

>>          2.3 includes 判断数组里面是否有某一个值  返回值:布尔值
         
>>          2.4 find  找到具体的某一项(找不到返回的是undefined)
>>                         是否操作数组：不
>>                         返回结果：返回找到的那一项，
>>                         回调函数中：返回true就找到 找到了就停止

>>          2.5 some  找true  （找到true后停止 返回true，找不到返回false）   全是true返回true

>>          2.6 every 找false （找到false后停止 返回false）          只要一个false就返回false

>>          2.6 redecu 收敛  4个参数（案例 求和，数组的平铺）
>>                         a、原数组不变, 返回的是叠加后的结果
>>                         b、用法：redecu((prev,next,index,item)=>{},初始值)
>>                             prev:上一次return的值，一般要设置初始值（没有就设置为0）
>>                             next:本次    index  item:原数组的
>>                         c、一般要设置初始值（没有就设置为0），要不然第一次没有pre>> v
 
> # 二：vue的介绍
>>#### 1.vue的特点
>>        1.1  核心只关注图层（view）    1.2  易学、轻量、灵活的特点   1.3 适用于移动端的项目                   
>>        1.4 渐进式框架 a. 声明式渲染(无需关心如何实现的)  b. 组件系统  c. 客户端路由（vue-router）
>>                      d.大规模状态管理（vuex）e. 构建工具（vue-cli）

>>#### 2.vue的两个核心点
>>        2.1 响应的数据变化  （当数据发生变化 -->视图发生变化）
>>        2.2 组合的视图组件

>>#### 3.MVVC架构（双向的）
>>        3.1 model(数据)    3.2 view(视图)   3.3 viewModel(视图模型)  3.4 controller(控制器)
>>       mvc架构是单向的

> # 三、vue的基础

>>#### 1.指令大汇总
>>        1.1 v-model   //表单空间或者组件创建双向绑定 
>>            双向数据绑定基于的原理：Object.defineProperty() 里面的get和set方法

>>        1.2 {{}}      //等价于 v-text   数据的绑定

>>        1.3 v-html    //把html字符串当做html渲染
>>            渲染的html一定是可信任的，因为在站点上动态渲染的HTML可能很危险，因为它容易导致xss攻击

>>        1.4 v-for     //循坏(数组、对象、字符串、数字) 要循环谁就加在谁的身上
>>                param1： 值   param2: 键名   param3: 索引
>>            <div v-for=" (value,key,index) in/of 数组"></div>

>>        1.5 @事件名   // 等价于 v-on：事件名    事件的监听
>>            1.5.1 不传参的时候就不要给绑定的函数+() ,会自动的默认传过去事件源（event)了
>>            1.5.2 要是传参了，并且函数里面要用到事件源那么就要手动给绑定的函数添加一个$event属性了
>>                  例如  html：   @click = fn($event,param1)
>>                        js :     fn(event,param1)

>>        1.6  ：   //等价于   v-bind  动态绑定数据
    
    条件渲染
>>        1.7  v-if   //操作的是DOM   
>>                 a、当v-if 要用到多个div的时候，这时候用template包裹 ，并把v-if 写在template上面，这样便不会改变原有的dom结构
>>                 b、默认情况下在切换dom时相同的结构会被复用，如果不需要复用 需要加key
>>             v-else    //必须紧跟在带 v-if 或者v-else-if 元素的后面，否则不能识别
>>             v-else-if    //必须紧跟在 v-if 或者 v-else-if 后面

>>        1.8 v-show  //操作的是样式   不支持template元素 也不支持v-else
            
>>        
>>        1.6 v-once    //只绑定一次数据，当数据再次发生变化的时候不会导致页面刷新
>>

>>        key的作用
>>            1.在v-if中 用key管理可复用的元素
>>                 vue一般会复用已有元素，而不是从头渲染，当添加一个具有唯一值得key属性，那么这两个元素就是完全独立的
>>            2.在使用 v-for中 跟踪每个节点的身份，从而重用和重新排序现有元素
>>                 a. 因为如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，要想重新排序现有数据，就要加key
>>                 b. 除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升,此时可以不用key


>>#### 2.vue中的修饰符(modifiers)
>>
>>

>>#### 3. 计算属性（computed）和监控器(watch)
>>        3.1 computed(是一个对象)
>>            3.1.1 对于任何复杂的逻辑都可以用计算属性
>>            3.1.2 计算属性vs方法
>>                两种方式的最终结果完全相同，但是计算属性是基于他们的依赖进行缓存的， （当依赖的数据没发生变化，那么直接用上次缓存优化了性能)
>>            3.1.3 计算属性vs watch
>>                 一般情况用计算属性，只有涉及到异步的时候采用watch   （因为当依赖的是多个变量的时候，watch需要把每一个的变量都监控，而计算属性只需要计算一次就行了）)
>>            3.1.4 计算属性的setter  
>>                 计算属性默认只有get(获取值)，当需要设置值得时候可以增添一个set

>>        3.2 watch（是一个对象）  当数据变化时执行异步或开销较大的操作的使用watch

>>#### 4.class和style 动态绑定样式(分为对象和数组，或者两者也可以混用)
>>        4.1 class  对象绑定方式
>>             :class = "{className：变量名}"      例如    :class = "{z:flag}"

>>        4.2  class  数组绑定方式
>>             ：class = "[变量名]"       例如：class = "[x,y,{z:flag},class1]"

>>        4.3 style  对象绑定方式(驼峰命名法)
>>             例如 ：style = "{backgroundColor:color}"

>>        4.4 style  数组绑定方式
>>             例如  ：style="[sty1,sty2,{backgroundColor:color}]"

>>#### 5.列表的渲染（checkbox 和 selected）










>>            
