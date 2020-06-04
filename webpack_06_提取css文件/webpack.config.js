const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/built.js',
        path: __dirname + '/build'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // 调用插件，定义目录和名字，主要是防止css文件代码过多，嵌入页面不好，所以需要提取出来
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}