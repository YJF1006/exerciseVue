## VUE第二天复习
- v-model (如果checkbox,select 多选是数组，提供一个value属性)   （radio，checkbox分组靠 的是v-model）  checked，selected不存在被忽略
- 修饰符  .number  .lazy
- 按键修饰符   .enter   .ctrl   .keyCode(.13)
- 事件 
        - @事件.stop   阻止事件传播
            ```
            e.stopPropagation(阻止事件传播)    e.cancelBubble =true   阻止冒泡
            ```
        - @事件.capture
            ```  
                xxx.addEventListener('click',fn,true)    //捕获
            ```
        - @事件.prevent  //阻止默认行为
            ```
                preventDefault    returnValue = false  
            ```

        -  @事件.once    //只触发一次
            ```
                相当于jquery  once 
                原生(绑定再移除)    on('click') off('click')
            ``` 

        -  @事件.self    //点自己的时候才触发
            ```
                e.srcElement&&e.target   //判断事件源绑定事件  
            ```      
## filters  实例上可以用
    ```
    html:    {{"123" | my(1,2,3)}}

    js:    filters:{
            my(管道符的输入，参数1，参数2...)
        }
    ```
- 注意：Vue.filter(函数名，回调函数)
    1.这是全局过滤器要放在js的顶部
    2.多个Vue实例都要用的时候写在全局过滤器里面（即写在原型里面，实例都可以使用）

##conputed  计算属性  （它是属性不是方法）
- computed 默认调用get方法 ，必须要有return  不支持异步  （watch解决了这个问题）
- 方法不会有缓存，computed 会根据依赖（归vue管理的数据，可以响应式变化的）的属性进行缓存
- 由两部分组成有get和set（不能只写set，但是可以只写get）  
- 一般情况下通过js赋值影响其他人，或者表单元素设置值的时候会调用set方法

## watch  观察者   监控某一个值的变化  支持异步
- watch 的属性名要和观察的人的名字一致  
        ```
        watch:{
            a(newVal,oldVal){   //监控a的值变化，只有值变化的时候才会触发

            }
        }
        ```
##计算属性computed和观察者watch之间的区别
- 计算属性是基于他们的依赖进行缓存的 ，计算属性只有在他的相关依赖发生改变的时才会重新求值
- 使用watch 选项允许我们执行异步操作

##v-if / v-show
- v-if    操作的是dom   v-if可以和v-else-if，v-else连写
- v-show  操作的是样式

##v-bind 简写:
- 动态绑定"属性"
        ```
        <img :src="变量src">
        ```
## 实现单页开发的方式
- 通过hash记录跳转的途径（可以产生历史管理）
-浏览器自带的历史history(history.pushState('','','/d')) ,要是没有后台的支持可能会产生404错误

>开发时使用hash 上线的话我们会使用history的方式
