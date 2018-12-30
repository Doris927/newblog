module.exports = {
    mode: 'development',
    entry: './src/main/resources/src/index.js',
    output: {
        //不加__dirname 会报错

        //path:__dirname +'./dist/js',
        //filename:'bundle.js'
        //以上2行window下报错

        path: __dirname,
        filename: './src/main/resources/src/bundle.js'

    },
    module: {
        rules: [
            {test : /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},
        ]
    }
}