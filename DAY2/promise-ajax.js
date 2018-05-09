/*
* @Author: duqinzhi
* @Date:   2018-05-08 09:39:46
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-08 15:15:49
*/
/*封装一个promise 版的ajax
	1.设置默认值
	2.原生的ajax
*/

function ajax({url='',type='get',dataType='json'}){
	return new Promise((resolve,reject)=>{
		let xhl = new XMLHttpRequest();
		xhl.open(type,url,true);   //是否异步 ,异步了 所以传入true
		xhl.responseType = dataType;
		xhl.onload = function(){   //成功   xhl.readState ==4    xhl.status ==200
			//成功调用成功的方法
			if(xhl.readyState == 4 && xhl.status == 200 ){
				resolve(xhl.response);
			}
			
		};
		xhl.onerror = function(err){   //失败
			//失败调用失败的方法
			reject(err);
		};  
		xhl.send();
	})
}




/*jquery版的ajax
$ajax({
	url:'',
	type:'get',
	dataType:'json',
	success:function(){},
	error:function(){}
});
*/