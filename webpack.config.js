const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config={
	entry:{
		main:'./src/main.js',
		app:'./src/app.js'
	},
	output:{
		filename:'[name].[hash].bundle.js',
		path:path.resolve(__dirname,'dist/assests')
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					{loader:'style-loader'},
					{
						loader:'css-loader',
						options: {
			              modules: true
			            }		
					},
				]
			},{
				test:/\.(png|gif|jpg)$/,
				use:[
					{
						loader:'url-loader',
						options: {
				          limit:999
				        }
					}
				]
			},{
				test:/\.(png|gif|jpg)$/,
				use:[
					{
						loader:'file-loader',
					}
				]
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'webpack+main',
			chunks:['main'],
			filename:'main.html'
		}),
		new HtmlWebpackPlugin({
			title:'webpack+main',
			chunks:['app'],			
			filename:'app.html'
		})
	]
}

module.exports = config;