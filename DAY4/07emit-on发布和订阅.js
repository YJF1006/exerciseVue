/*
* @Author: duqinzhi
* @Date:   2018-05-12 15:34:45
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-12 16:35:10
*/

/*
	1. emit  发布
	2. on    订阅 {女生失恋:['哭','购物','吃']} 
 */

function Girl(){
	this._events ={}
}
Girl.prototype.on =function(eventName,callback){

	if(this._events[eventName]){   //不是第一次
		this._events[eventName].push(callback);   //相当于{失恋:[cry,eat,shopping]}
	}else{
		this._events[eventName] = [callback]   //第一次的时候走这  相当于  {失恋:[cry]}
	}
};


Girl.prototype.emit =function(eventName,...args){  
	//想要除了第一个剩下的参数[我 你 他]
	//[].slice.call(arguments,1)
	//Array.from(arguments).slice(1)   但最好的是...args
	if(this._events[eventName]){
		this._events[eventName].forEach(call=>call(...args));
	}
};

let girl = new Girl();
let cry = (who)=>{console.log(who +'哭');};
let shopping = (who)=>{console.log(who +'购物');};
let eat = (who)=>{console.log(who +'吃');};
//订阅
girl.on('失恋',cry);        //相当于  {失恋:[cry]}
girl.on('失恋',eat);		//相当于  {失恋:[cry,eat]}
girl.on('失恋',shopping);	//相当于  {失恋:[cry,eat,shopping]}

//发布
girl.emit('失恋','我');