

var path = require('path');
var webpack = require('webpack');
module.exports = {
    // entry 入口文件
    entry: './www/static/src/App.js',
    // output 编译后的js输出目录及名称
    output: {
        path: path.join(__dirname, '/www/static/js/'),
        filename: 'bundle.js'
    },
    // devtool: 'null', //注意修改了这里，压缩打包代码
    devServer: {
        contentBase: "./www", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
  
    //resolve 指定可以被 import 的文件后缀。比如 Hello.jsx 这样的文件就可以直接用 import Hello from 'Hello' 引用。
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        //loaders 指定 babel编译后缀名为 .js 或者 .jsx 的文件，这样你就可以在这两种类型的文件中自由使用 JSX 和 ES6 了。
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                cacheDirectory: false,
                // query 指定babel的一些插件等
                query: {
                    presets: ['react', 'es2015-loose', 'stage-0'],
                    plugins: ['transform-runtime']
                },
                exclude: /node_modules/
            },
            {
                  test: /\.css$/,
                  loaders: [ 'style-loader', 'css-loader' ]
            }
        ]

        //热更新插件
        // plugins:[
        //     new webpack.HotModuleReplacementPlugin()//热加载插件
            
        // ]
    }
}






