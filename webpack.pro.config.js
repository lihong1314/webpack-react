
var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin'); 


module.exports={
	entry:[path.resolve(__dirname,'app/root.js')],
	output:{
		path:path.resolve('dist'),
        filename:'[name].js'
	},
	module:{
		loaders:[   
           {
            test:/(\.js|\.jsx)$/,
            exclude:/node_modules/,
            use:[{
                loader:'babel-loader',
                options:{
                    plugins:['react-hot-loader/babel']
                }
            }]
           },
           {
           	test:/\.css$/,
           	loader:'style!css'
           },
           {
           	test:/\.less$/,
           	loader:'style-loader!css-loader!less-loader'
           },
           {
            test:/\.scss$/,
              loader:'style-loader!css-loader!sass-loader'
           },
           {
            test:/\.(png|jpg)$/,
            loader:"url-loader?limit=8192&name=img/[name][hash:8].[ext]"
           }
		]
	},
    plugins: [
        new webpack.DefinePlugin({
            'process.pro.NODE_PRO': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            title:'首页',
            template:'app/index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: __dirname + '/publicCss',
                to: __dirname + '/dist/publicCss'
            },
            {
                from: __dirname + '/publicJs',
                to: __dirname + '/dist/publicJs'
            },
            {
                from: __dirname + '/img',
                to: __dirname + '/dist/img'
            }
          ])
    ],
    resolve: {
        //自动扩展文件后缀名
        extensions: ['.js', '.json', '.less','.scss','.jsx']
    },
    watchOptions:{
        ignored:/node_modules/
    }
}