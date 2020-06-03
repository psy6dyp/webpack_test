module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/built.js',
        path: __dirname + '/build'
    },
    module: {
        rules: []
    },
    plugins: [],
    mode: 'development'
}