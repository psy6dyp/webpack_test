// 必须先引入这个打包插件 html-webpack-plugin 用npm下载。
const HtmlWebpacPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/built.js',
        path: __dirname + '/build'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [ 'style-loader', 'css-loader', 'less-loader' ]
            }
        ]
    },
    plugins: [
        // 插件都是直接new 然后里面可以插一个参数叫做模板template 指定以哪一个html文件作为模板来打包
        new HtmlWebpacPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}