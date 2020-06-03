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
                test: /\.less$/,
                use: [ 'style-loader', 'css-loader', 'less-loader' ]
            },
            {
                test: /\.(png|gif|jpg)/,
                // 需要下载url-loader和他的依赖：file-loader,file-loader也能处理别的文件。
                loader: 'url-loader',
                options: {
                    // 意思是小于11KB的图片用base64处理
                    limit: 11 * 1024,
                    // 名字取哈希值的前64位加上扩展名，把图片都放在img文件夹下面
                    name: 'img/[hash:10].[ext]',
                    // 关闭es6的模块化，避免html里的图片解析成Object对象
                    esModule: false
                }
            },
            {
                test: /\.html$/,
                // 此处使用html-loader可以使得html内部使用到的图片提给url处理
                use: [ 'html-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}