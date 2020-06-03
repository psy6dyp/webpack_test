module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/built.js',
        path: __dirname + '/build'
    },
    module: {
        rules: [
            {
                /*
                css处理
                test: /\.css$/,
                loader从右至左、从下至上加载，css-loader先将css文件的代码搞到js里面，style-loader再生成style标签嵌入html文件。
                use: [ 'style-loader', 'css-loader' ]
                 */
                // less或者sass处理
                test: /\.less$/,
                // 若是less或者sass文件，则需要再下载less-loader和less，但是less不用写出。less-loader可将less文件的代码转化成css代码。
                use: [ 'style-loader', 'css-loader', 'less-loader' ]
            }
        ]
    },
    plugins: [],
    mode: 'development'
}