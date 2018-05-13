/*
* @Author: duqinzhi
* @Date:   2018-05-10 10:00:09
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-11 14:51:52
*/

/*
1.将数据循环到页面上     1
2.敲回车时添加新数据 (需要加入isSelected)
3.删除功能
4.计算 没有被选中的个数
5.失去焦点了输入框清空
 */
let vm =new Vue({
	el:'#app',	
    created(){ // ajax获取 初始化数据
        // 如果localStorage中有数据 就用有的没数据 就用默认的
        this.todos = JSON.parse(localStorage.getItem('data')) || this.todos;


        // 监控hash值的变化, 如果页面已经有hash了 重新刷新页面也要获取hash值
        this.hash = window.location.hash.slice(2) || 'all';
        window.addEventListener('hashchange',()=>{
            // 当hash值变化 重新操作记录的数据
            this.hash = window.location.hash.slice(2);
        },false);
    },
	directives:{
		focus(el,bindings){  //el  当前指令值所在的dom
			//当点击当前i的时候让内部的输入框获取焦点
			if(bindings.value){  //说明此时dom是点击的那个 cur==todo
				el.focus();  //获取焦点
			}
		}
	},
	data:{
		val:'',
		cur:'',
		hash:'',
		todos:[
			 {isSelected:false,title:'我要学习'},
			 {isSelected:true,title:'我要吃饭'}
		]
	},
	methods:{
		//删除功能
		remove(r){
			this.todos= this.todos.filter(item=>item!==r);
		},
		//添加功能
		add(val){
			this.todos.push({isSelected:false,title:this.val});
			//清空输入框
			this.val='';
		},
		remember(todo){
			//当前传递的是todo （当前点击的这一项）
			this.cur=todo;
		},
		cancel(){
			this.cur='';     //''!=todo   所以会显示span里面的
		}
	},
	computed:{
		//根据数组里面的isSeleted 算出来 uncheck没选中的值
		uncheck(){
		 //自己第一次尝试的
			let num = 0;
			this.todos.forEach(item=>{
				if(!item.isSelected){
					num ++;
				}else{
					num=num;
				}
			});
			return num;
		

			//简单版本的的
			//return this.todos.filter(item=>!item.isSelected).length
		},
		//根据不同的hash值，算出列表里面应该放的过滤后的todos
		filterTodos(){
			if(this.hash === 'all'){   //如果是全部，那么就把todos全部给
				return this.todos;
			}
			if(this.hash ==="finish"){  //如果是已完成 ，那么就过滤 留下isSelected:true
				return this.todos.filter(item=>item.isSelected);
			}
			if(this.hash === "unfinish"){    //如果是未完成 ，那么就过滤 留下isSelected:false
				return this.todos.filter(item=>!item.isSelected);
			}
			window.location.hash = '/all';   //如果别的hash值 那就就转到all  以防有的人在url里面随便瞎写
		}
	},
	watch:{  //watch 默认只监控一层数据的变化  深度监控时，要写成对象
		// todos(){//监控todos  todos 一改变就触发
		// 		alter();
		// }
		todos:{
			handler(){   //默认写成函数  就相当于默认写了个handler   deep:true  代表深度
				// localStorage 默认存的字符串,所以把存的转成json
				// 取出来的时候，再转成
				localStorage.setItem('data',JSON.stringify(this.todos));
			},deep:true
		}
	}
});


/*
1.JSON.parse()   把json字符串转成js数组或数组
2.JSON.stringify()   把js对象或者数组转成 json字符串
 */  