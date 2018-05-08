/**面试题
 * 1.forEach ,for in,for of,for 的区别 
 *
 *
 * 
 * 2.1===1===1   //false  因为1===1 返回true，然后true===1  返回false
 * 
 */

	let arr =[1,2,3,4,5];
	arr.b="100";

//0.for是编程式
	for(let i=0;i<arr.length;i++){   //编程式
		console.log(arr[i]);
	}

//1.forEach 不支持return是声明式的
	arr.forEach(function(item){   //声明式（不关心如何实现）
		console.log(item);
	});

//2.for in  遍历的时候 key会变成字符串类型,包括数组的私有属性可以打印出来  所以一般不用for in
	for(let key in arr){
		console.log(typeof key);
	}

//3.for of 支持return 并且是值为of数组（不能遍历对象）  现在数组遍历常用for of
	for(let val of arr){
		console.log(val);
	}

	let obj = {name:"dqz",age:18};
	//想遍历对象的时候
//4.Object.keys 将对象的key作为新的数组
	for(let key of Object.keys(obj)){
		console.log(key);  //name age 
		console.log(obj[key]);  //用.会当做属性，所以用变量[]
	}

/*5.filter  过滤      （删除）
			是否操作数组：不；  
		  	返回结果：过滤后的新数组； 
		  	回调函数的返回结果：返回true，将这一项放到新数组中，返回false就不放新数组里面*/
	let arr1 = [1,2,3,4]
	let newArr1 = arr1.filter(function(item) {
		return 2<item&&item<5;
	});
	console.log(newArr1);

/*6.map 将原有的数组映射成一个新的数组  （更新）
	 		是否操作数组：不；  
		  	返回结果：新数组； 
		  	回调函数的返回结果：回调函数中返回什么这一项就是什么*/
	let arr2 =[1,2,3,4];
	let mapArr = arr2.map(function(item){
		return `<li>${item}</li>`;   //ES6拼接模板
	});
	console.log(mapArr.join(' '));   //join分割

//7.includes 判断数组里面是否有某一个值  返回值:布尔值
 	let arr3 = [1,32,58,67,98];
 	console.log(arr3.includes(32));  //true
 
/*8.find  找到具体的某一项(找不到返回的是undefined)
			不会改变数组
			返回结果：返回找到的那一项，
			回调函数中：返回true就找到 找到了就停止*/

	//找里面有8的数字
	let result = arr3.find(function(item,index){
		return item.toString().indexOf(5) >-1;  //先转成字符串，在字符串里面有数字5的那个数，然后>-1说明找到了
	});
	console.log(result); //58  (不会找98了)

//9.  some   找true  （找到true后停止 返回true，找不到返回false）
//10. every  找false （找到false后停止 返回false）
	

/*11. reduce 收敛  4个参数 
			用法 ： arr.reduce(function(四个参数){},第一次的prev)
			原数组不变 
			返回结果：返回的是叠加后的结果
			回调函数返回的结果
	参数： 第一次  prev:代表数组的第一项  next:数组的第二项
		   第二次  prev:undefined，       next:数组的第三项
	  index  item:原数组
*/
	let arr4 = [1,2,3,4,5];
	arr4.reduce(function(prev,next,index,item){
		console.log(prev,next);
		return prev + next;  //本次的返回值将是下一次的prev，要是没有return,那么下一次的prev就是undefined
	});
	

//reduce 的练习题，已知单价和数量，求总价
	let arr5 = [{price:30,count:2},{price:40,count:3},{price:60,count:2},{price:10,count:5}];
	let sum = arr5.reduce(function(prev,next){
		//  0             +     30*2
		//  0+30*2        +     40*3
		//  0+30*2+40*3   +     60*2
		return prev + next.price*next.count;
	},0);   //指定第一次的prev 为0
	console.log(sum);

//数组的平铺
	//把一个二维数组变成一位数组（reduce）
	
 	let arr6 = [[1,2,3],[4,5,6],[7,8,9]];
 	let flat = arr6.reduce(function(prev,next){
 		return prev.concat(next);
 	});
 	console.log(flat);
