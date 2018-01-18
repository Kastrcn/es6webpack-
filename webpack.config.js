var path = require('path');
var HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports = {
    entry: [
        './src/main.js',
    ],
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //   publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"test",
            filename:"index.html",
            hash: true

        })
    ],
    //isProd
    devtool: true ? false : 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: 'dist/',
        port: 8000,
        overlay:{
            errors:true
        },
        // host:true
    },
}