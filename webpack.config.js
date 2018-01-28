const path = require("path");

module.exports={
	entry:{
		main:'./src/main.js',
		app:'./src/app.js'
	},
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,'dist')
	}
}