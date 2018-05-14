/*
* @Author: duqinzhi
* @Date:   2018-05-14 11:15:16
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-14 20:32:16
*/
/*webpack 必须采用commonjs写法  这里面主要写配置文件（记得引入path,通过path.resolve()解析出绝对路径）

	entry:''  //d打包入口文件
	output:{
		filename:''   //打包后的文件名字
		path:path.resolve('')   //打包的路径(通过path之后将相对路径转为绝对路径)  因为path要绝对路径
	}



 */

let path = require('path');    //专门处理路径用的
console.log(path.resolve('./dist'));   //解析 以当前路径解析出一个相对路径
let HtmlWebpackPlugin =require('html-webpack-plugin');
module.exports = {
	entry:'./src/main.js',   //打包的入口文件，webpack会自动查找相关的依赖进行打包
	output:{
		filename:'bundle.js',    //filename:"打包后的名字"   打包后的名字是随意的
		path:path.resolve('./dist')    //这里是打包后的路径  必须是绝对路径
	},

	/*模块的解析规则
		1.js 匹配所有的js 用babel-loader转译  排除掉node_modules
	*/
	module:{
		rules:[
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},      //转义所有.js结尾的文件 用babel-loader，排除掉node_modules
			//use 是从右往左写的
			{test:/\.css$/,use:['style-loader','css-loader']},   //css配置 
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},  //less配置
			//转化base64 只在8192(8k)字节转化，其他情况下输出图片
			{test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'},   
			{test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'},//图片的配置
			{test:/\.vue$/,use:'vue-loader'}
		] 
	},
	//html的配置
	plugins:[
		new HtmlWebpackPlugin({    //自动插入到dist目录
			template:'./src/index.html',   //使用的模板
			//filename:'login.html'   //产出的文件名字
		})
	]
	
};