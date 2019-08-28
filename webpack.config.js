const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let webpack = require('webpack');

module.exports={
    entry: "./src/java.js",
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    devServer:{
        
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({$:'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'}),
    ],
    module:{
        rules: [{
            test: /\.scss$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(png|svg|jpg|gif)/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            }
    
        },
        {
            test: /\.html$/,
            use: ['html-loader']
        }
    ]
    }
}