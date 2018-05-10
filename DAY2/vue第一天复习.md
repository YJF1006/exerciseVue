## 复习第一天
- vm => viewModel  数据最终都会被vm所代理
- {{a}} 取值表达式，通过{{}} 来取值,默认不写this,里面可以写 表达式  赋值运算 计算 三元表达式 尽量少些逻辑

### 指令：
- dom元素的行间属性，vue提供了内置的指令，必须 v- 开头，后面的值均为变量
    - v-model : //实现数据的双向绑定   （表单元素），会忽略掉  value checked selected  ，将数据绑定在视图上视图修改后影响数据的变化
    - V-text  //取代 {{}}    
            在app 所在的标签里面加上v-cloak  解决闪烁问题 （但是要给加上样式：display:none） 后期都可以不使用
    - v-once   //绑定一次，数据再变化不会导致视图刷新，写在不想刷新的标签上v-once 
    - v-html   //将html字符串转化成html
    - v-for   //循坏（数组，对象，字符串，数字）
        ```
            <div v-for=" value in/of 数组"></div>
            <div v-for=" (value,index) in/of 数组"></div>
        ```
###事件 v-on(@)   v-on:事件名    @事件名
- 绑定给dom元素，函数需要定义在methods中，不能和data里的内容重名
- this指向的是实例不是window,所以不能使用箭头函数
- 事件源对象  ，如果不写()，会自动传入，否则只能手动传入$event
    ```
        <div v-on:事件名 ></div>
    ```

## 安装
    npm install vue axios bootstrap